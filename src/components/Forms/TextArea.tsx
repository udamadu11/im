import React from "react";
import { useField } from "formik";

interface TextAreaProps {
  name: string;
  inputProps?: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export default function TextArea({
  name,
  inputProps,
  placeholder = "",
  onChange,
}: TextAreaProps) {
  const [field] = useField(name);

  const handleFieldChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    field.onChange(e);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <textarea
      className="form-control"
      {...inputProps}
      {...field}
      onChange={handleFieldChange}
      placeholder={placeholder}
      name={name}
    />
  );
}
