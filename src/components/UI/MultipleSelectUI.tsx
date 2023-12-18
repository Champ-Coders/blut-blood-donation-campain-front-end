import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import React, { useState } from "react";

//! this reusable UI for select multiple options 
const MultipleSelectUI = ({
  data: { optionData },
}: {
  data: { optionData: string[] };
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = optionData.filter((o) => !selectedItems.includes(o));
  return (
    <Select
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={setSelectedItems}
      className="border-primary "
      style={{
        height: "44px",
        fontSize: "1rem",
        paddingLeft: "12px",
        paddingRight: "30px", // Adjust as needed to accommodate the search icon
        minWidth: "50vw", // Set your desired minWidth here
      }}
      getPopupContainer={(triggerNode) => triggerNode.parentNode} // Ensure minWidth is applied to the dropdown container
      suffixIcon={
        <SearchOutlined
          style={{
            backgroundColor: "#ea062b",
            borderRadius: "50%",
            padding: "8px",
            color: "white",
            fontSize: "1.8rem", // Match the font size with the height of the Select component
          }}
        />
      }
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};

export default MultipleSelectUI;
