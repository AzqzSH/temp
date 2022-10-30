import React from "react";
import { InputWrapper } from "@mantine/core";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

interface PhoneInputFieldProps {
  value: string;
  onChange: (phone: string) => void;
  error?: any;
  onlyCountries: string[];
  country?: string;
  name?: string;
  required?: boolean;
  label?: string;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  onChange,
  value,
  error,
  onlyCountries,
  country,
  name = "phoneNumber",
  required,
  label = "Phone Number",
}) => {
  return (
    <InputWrapper label={label} error={error} required={required}>
      <PhoneInput
        prefix="+"
        onlyCountries={onlyCountries}
        country={country}
        value={`${value}`}
        onChange={(c) => onChange(c)}
        inputProps={{
          name,
        }}
        copyNumbersOnly
        inputClass="font-sans focus:!border-blue-500 !w-full !border-1 !border-gray-300"
      />
    </InputWrapper>
  );
};

export default PhoneInputField;
