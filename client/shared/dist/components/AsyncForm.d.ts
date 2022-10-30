import { DetailedHTMLProps, HTMLAttributes } from "react";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
declare type FieldNames<T> = {
    [field in keyof T]: field;
};
interface AsyncFormProps<T> {
    defaultValues: T;
    onSave: (values: T, form: UseFormReturnType<T>) => void | Promise<any>;
    onError?: (error: any, form: UseFormReturnType<T>) => void | Promise<any>;
    children: (props: UseFormReturnType<T> & {
        names: FieldNames<T>;
    }) => React.ReactNode;
    submitTitle?: string;
    allowReset?: boolean;
    validationSchema?: any;
    customSubmit?: boolean;
}
declare type BaseHTMLProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "onSubmit" | "children" | "onError">;
declare function AsyncForm<T extends {}>({ onSave, onError, validationSchema, defaultValues, children, customSubmit, submitTitle, allowReset, ...rest }: AsyncFormProps<T> & BaseHTMLProps): JSX.Element;
export default AsyncForm;
