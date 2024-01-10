import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col  w-full`}>
      {label && (
        <div className="flex gap-1 items-center mb-1">
          <label
            className={`${
              true
                ? "text-[13px] leading-6 font-inter text-rose-50 font-semibold capitalize"
                : "text-[13px] leading-6 font-inter text-gray-40 font-semibold capitalize"
            }`}
          >
            {label} <span className="text-rose-50">*</span>
          </label>
        </div>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
