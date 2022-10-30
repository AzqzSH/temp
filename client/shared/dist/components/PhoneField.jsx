import React from "react";
import { InputWrapper } from "@mantine/core";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
var PhoneInputField = function (_a) {
    var onChange = _a.onChange, value = _a.value, error = _a.error, onlyCountries = _a.onlyCountries, country = _a.country, _b = _a.name, name = _b === void 0 ? "phoneNumber" : _b, required = _a.required, _c = _a.label, label = _c === void 0 ? "Phone Number" : _c;
    return (<InputWrapper label={label} error={error} required={required}>
      <PhoneInput prefix="+" onlyCountries={onlyCountries} country={country} value={"".concat(value)} onChange={function (c) { return onChange(c); }} inputProps={{
            name: name,
        }} copyNumbersOnly inputClass="font-sans focus:!border-blue-500 !w-full !border-1 !border-gray-300"/>
    </InputWrapper>);
};
export default PhoneInputField;
//# sourceMappingURL=PhoneField.jsx.map