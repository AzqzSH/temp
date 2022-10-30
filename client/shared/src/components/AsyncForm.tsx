import { Button, LoadingOverlay } from "@mantine/core";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { useForm, yupResolver } from "@mantine/form";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { isEqual } from "lodash";

type FieldNames<T> = {
  [field in keyof T]: field;
};

interface AsyncFormProps<T> {
  defaultValues: T;
  onSave: (values: T, form: UseFormReturnType<T>) => void | Promise<any>;
  onError?: (error: any, form: UseFormReturnType<T>) => void | Promise<any>;
  children: (
    props: UseFormReturnType<T> & { names: FieldNames<T> }
  ) => React.ReactNode;
  submitTitle?: string;
  allowReset?: boolean;
  validationSchema?: any;
  customSubmit?: boolean;
}

type BaseHTMLProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "onSubmit" | "children" | "onError"
>;

function AsyncForm<T extends {}>({
  onSave,
  onError,
  validationSchema,
  defaultValues,
  children,
  customSubmit,
  submitTitle = "Submit",
  allowReset,
  ...rest
}: AsyncFormProps<T> & BaseHTMLProps) {
  const form = useForm<T>({
    schema: validationSchema && yupResolver(validationSchema),
    initialValues: defaultValues,
  });

  const [values, setValues] = useState(defaultValues);

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        setIsSubmitting(true);

        try {
          await onSave(values, form);

          setValues(values);
        } catch (error: any) {
          const err = JSON.parse(JSON.stringify(error));
          onError && onError(err, form);
        } finally {
          setIsSubmitting(false);
        }
      })}
      className={`min-h-[inherit] w-full relative flex flex-col justify-between p-4  ${rest.className}`}
    >
      {children({
        ...form,
        names: Object.keys(defaultValues).reduce((acc, elem) => {
          acc[elem as keyof T] = elem as keyof T;

          return acc;
        }, {} as FieldNames<T>),
      })}

      <LoadingOverlay visible={isSubmitting} />

      {!customSubmit && (
        <div className="justify-end flex flex-row mt-4 gap-2">
          {allowReset && (
            <Button
              color="dark"
              variant="outline"
              onClick={() => form.setValues(values)}
              disabled={isEqual(values, form.values)}
              className="w-full md:w-48"
            >
              Revert Changes
            </Button>
          )}

          <Button
            type="submit"
            className="w-full md:w-48"
            disabled={isEqual(values, form.values)}
          >
            {submitTitle}
          </Button>
        </div>
      )}
    </form>
  );
}

export default AsyncForm;
