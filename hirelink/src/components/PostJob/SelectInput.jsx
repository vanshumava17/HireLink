import React from "react";
import { useEffect, useState } from "react";
import { Combobox, InputBase, ScrollArea, useCombobox } from "@mantine/core";

const SelectInput = (props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  useEffect(() => {
    setData(props.options);
    setValue(props.form.getInputProps(props.name).value)
    setSearch(props.form.getInputProps(props.name).value)
  }, []);

  const exactOptionMatch = data.some((item) => item === search);
  const filteredOptions = exactOptionMatch
    ? data
    : data.filter((item) =>
        item.toLowerCase().includes(search?.toLowerCase().trim())
      );

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        if (val === "$create") {
          setData((current) => [...current, search]);
          setValue(search);
          props.form.setFieldValue(props.name,search);
        } else {
          setValue(val);
          setSearch(val);
          props.form.setFieldValue(props.name,val);
        }

        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          label={props.label}
          {...props.form.getInputProps(props.name)}
          rightSection={<Combobox.Chevron />}
          value={search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || "");
          }}
          placeholder={props.placeholder}
          rightSectionPointerEvents="none"
          withAsterisk
          // className="font-medium [&_label]:!text-md"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize mah={155} type="scroll">
            {options}
            {!exactOptionMatch && search?.trim().length > 0 && (
              <Combobox.Option value="$create">
                + Create {search}
              </Combobox.Option>
            )}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default SelectInput;
