import React, { useState } from "react";
import { Button, Combobox, useCombobox, Text, Box } from "@mantine/core";
import { TbAdjustments } from "react-icons/tb";

const opt = [
  "Relevance",
  "Most Recent",
  "Salary (Low to High)",
  "Salary (High to Low)",
];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState("Relevance");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option value={item} key={item} className="!text-sm">
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        width={170}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div
            className="border-2 border-caribbean-green400 flex items-center gap-2 p-2 rounded-lg font-semibold cursor-pointer hover:opacity-80 hover:shadow-xl hover:ring-2 hover:ring-caribbean-green400 text-caribbean-green-400"
            onClick={() => combobox.toggleDropdown()}
          >
            {selectedItem}{" "}
            <TbAdjustments className="text-caribbean-green-400 h-4 w-4" />
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
};

export default Sort;
