import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface TextAreaFieldProps {
  label?: string;
  name?: string;
  customClass?: string;
  placeholder?: string;
  rows?:number;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: any;
  value?: string;
  disabled?: boolean;
  defaultValue?: any;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Change the event type for textarea
}

const TextAreaField = ({
  label,
  name,
  customClass,
  placeholder,
  required,
  rows,
  register,
  errors,
  value,
  disabled,
  defaultValue,
  onChange,
}: TextAreaFieldProps) => {
  return (
    <div className="w-full">
      {label && (
        <div className="flex gap-1 items-center mb-1">
          <label
            className={`${
              errors?.name
                ? "text-[13px] leading-6 font-inter text-rose-50 font-semibold capitalize"
                : "text-[13px] leading-6 font-inter text-gray-40 font-semibold capitalize"
            }`}
          >
            {label} {required && <span className="text-rose-50">*</span>}
          </label>
        </div>
      )}
      {register ? (
        <textarea
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          defaultValue={defaultValue ? defaultValue : undefined} // Use undefined for textarea defaultValue
          // onChange={onChange ? onChange : () => {}}
          className={`${
            customClass
              ? customClass
              : `${
                  errors?.name
                    ? "border-1 w-full bg-red-500 rounded-lg py-2 px-[10px] font-inter text-sm leading-6 placeholder:capitalize text-gray-900 focus:outline-rose-500"
                    : "border w-full bg-gray-50 rounded-lg border-border py-2 px-[10px] font-inter text-sm leading-6 placeholder:capitalize text-gray-90 focus:outline-primary"
                }`
          }`}
          {...register(name ? name : "noName", {
            required: required ? true : false,
          })}
        ></textarea>
      ) : (
        <textarea
          placeholder={placeholder}
          className={`${
            customClass
              ? customClass
              : `${
                  errors?.name
                    ? "border-1 w-full bg-red-50 rounded-lg py-2 px-[10px] font-inter text-sm leading-6 placeholder:capitalize text-gray-900 focus:outline-rose-500"
                    : "border w-full bg-gray-50 rounded-lg border-border py-2 px-[10px] font-inter text-sm leading-6 placeholder:capitalize text-gray-900 focus:outline-primary"
                }`
          }`}
          name={name}
          rows={rows}
          value={value}
          disabled={disabled}
          defaultValue={defaultValue ? defaultValue : undefined}
          onChange={onChange ? onChange : () => {}}
          required={required ? true : false}
        ></textarea>
      )}
      {errors?.name && <p className="text-rose-500">{label} is required</p>}
    </div>
  );
};

export default TextAreaField;
