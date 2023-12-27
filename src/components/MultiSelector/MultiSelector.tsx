import React, { useEffect } from "react";

import Select from "react-select";

type optionType = {
  options: any;
  name: string;
  placeholder?: string;
  setValue?: any;
  setData?: any;
  defaultValue?: any;
  isMulti: boolean;
  label?: string;
  required?: boolean;
};
const MultiSelect = ({
  options,
  name,
  placeholder,
  setValue,
  setData,
  defaultValue,
  isMulti,
  label,
  required,
}: optionType) => {
  const colorStyles = {
    control: (styles: any, { isFocused }: any) => {
      return {
        ...styles,
        backgroundColor: "#F9FAFB",
        borderColor: isFocused ? "#ea062b" : "#D9DEE3",
        borderRadius: "8px",
        fontSize: "14px",
        padding: "2px",
        color: isFocused ? "white" : "black",
      };
    },
    option: (styles: any, { isFocused }: any) => {
      return {
        ...styles,
        color: isFocused ? "white" : "black",
        backgroundColor: isFocused ? "#ea062b" : null,
      };
    },
    indicatorSeparator: (styles: any) => ({
      ...styles,
      display: "none",
    }),
    multiValueRemove: (styles: any) => ({
      ...styles,
      color: "white",
      ":hover": {
        backgroundColor: "#ea062b",
        color: "white",
      },
    }),
  };

  /* Set Default value */
  useEffect(() => {
    if (defaultValue) {
      const transformedValue = isMulti
        ? defaultValue.map((option: any) => ({
            id: option.value,
            name: option.label,
          }))
        : { id: defaultValue.value, name: defaultValue.label };
      setValue && setValue(name, transformedValue);
      setData && setData(transformedValue);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      {label && (
        <div className="flex gap-1 items-center mb-1">
          <label
            className={`text-[13px] leading-6 font-inter text-gray-40 font-semibold capitalize`}
          >
            {label} {required && <span className="text-rose-500">*</span>}
          </label>
        </div>
      )}

      <Select
        options={options}
        isMulti={isMulti}
        defaultValue={defaultValue ? defaultValue : null}
        styles={colorStyles}
        name={name}
        placeholder={placeholder}
        onChange={(options: any) => {
          isMulti
            ? (setValue &&
                setValue(
                  name,
                  options.map((option: any) => {
                    return { id: option.value, name: option.label };
                  })
                )) ||
              (setData &&
                setData(
                  options.map((option: any) => {
                    return { id: option.value, name: option.label };
                  })
                ))
            : (setValue &&
                setValue(name, { id: options.value, name: options.label })) ||
              (setData && setData({ id: options.value, name: options.label }));
        }}
      />
    </div>
  );
};

export default MultiSelect;
