"use client";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type ReactQuillTextProps = {
  value?: string;
  setValue?: (value: string) => void;
  label?: string;
  required?: boolean;
};

const ReactQuillText = ({
  value,
  setValue,
  label,
  required,
}: ReactQuillTextProps) => {
  return (
    <div className="">
      {label && (
        <div className="flex gap-1 items-center mb-1">
          <label
            className={`text-[13px] leading-6 font-inter text-gray-400 font-semibold capitalize`}
          >
            {label} {required && <span className="text-rose-500">*</span>}
          </label>
        </div>
      )}
      <ReactQuill
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            [{ color: [] }, { background: [] }],
            ["link", "image"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "color",
          "background",
          "link",
          "image",
        ]}
        theme="snow"
        value={value}
        style={{ maxHeight: "400px" }}
        onChange={setValue}
        placeholder={"Write Something..."}
        className="h-64 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-[70px] "
      />
    </div>
  );
};

export default ReactQuillText;
