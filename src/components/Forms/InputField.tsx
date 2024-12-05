import React from "react";
import { useField } from "formik";

interface InputFieldProps {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function InputField({
  name,
  type = "text",
  inputProps,
  placeholder,
  onChange,
}: InputFieldProps) {
  const [field] = useField(name);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      {...inputProps}
      {...field}
      value={field.value ?? ""}
      onChange={handleFieldChange}
      size={1}
      onFocus={handleFocus}
    />
  );
}
