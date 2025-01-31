import React, { useEffect, useState } from "react";
import {
  Checkbox,
  CheckIcon,
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  ScrollArea,
  useCombobox,
} from "@mantine/core";
import { FaSearch } from "react-icons/fa";

const MultiInput = (props) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    // onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
    scrollBehavior: "smooth",
  });

  useEffect(() => {
    setData(props.options);
  }, []);

  const exactOptionMatch = data.some((item) => item === search);

  const handleValueSelect = (val) => {
    setSearch("");

    if (val === "$create") {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val)
          ? current.filter((v) => v !== val)
          : [...current, val]
      );
    }
  };

  const handleValueRemove = (val) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.slice(0, 1).map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          <Checkbox
            size="xs"
            color="caribbeanGreen.4"
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: "none" }}
          />
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      withinPortal={false}
    >
      <Combobox.DropdownTarget>
        <PillsInput
          onClick={() => combobox.openDropdown()}
          variant="unstyled"
          rightSection={
            <Combobox.Chevron className="!text-mine-shaft-100 !w-6 !h-6" />
          }
          leftSection={
            <p className="text-caribbean-green-400 p-2 bg-mine-shaft-900 rounded-full">
              {props.icon}
            </p>
          }
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
        >
          <Pill.Group className="ml-2">
            {value.length > 0 ? (
              <>
                {values}
                {value.length > 1 && (
                  <Pill className="!text-mine-shaft-100 !font-semibold">
                    +{value.length - 1} more
                  </Pill>
                )}
              </>
            ) : (
              <Input.Placeholder className="!text-mine-shaft-100 font-semibold ">
                {props.title}
              </Input.Placeholder>
            )}
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search"
        />
        <ScrollArea.Autosize mah={200} type="scroll">
          {options.length === 0 ? (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          ) : (
            <Combobox.Options>{options}</Combobox.Options>
          )}
        </ScrollArea.Autosize>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiInput;
