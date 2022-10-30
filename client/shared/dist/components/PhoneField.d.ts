import React from "react";
import "react-phone-input-2/lib/style.css";
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
declare const PhoneInputField: React.FC<PhoneInputFieldProps>;
export default PhoneInputField;
