<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import {
  Checkbox,
  CheckIcon,
=======
// import React, { useEffect, useState } from "react";
// import {
//   Checkbox,
//   CheckIcon,
//   Combobox,
//   Group,
//   Input,
//   Pill,
//   PillsInput,
//   ScrollArea,
//   useCombobox,
// } from "@mantine/core";
// import { FaSearch } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { updateFilter } from "../../slices/FilterSlice";

// const MultiInput = (props) => {
//   const [search, setSearch] = useState("");
//   const [data, setData] = useState([]);
//   const [value, setValue] = useState([]);

//   const dispatch = useDispatch();

//   const combobox = useCombobox({
//     onDropdownClose: () => combobox.resetSelectedOption(),
//     // onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
//     scrollBehavior: "smooth",
//   });

//   useEffect(() => {
//     setData(props.options);
//   }, []);

//   const exactOptionMatch = data.some((item) => item === search);

//   const handleValueSelect = (val) => {
//     setSearch("");

//     if (val === "$create") {
//       setData((current) => [...current, search]);
//       setValue((current) => [...current, search]);
//       dispatch(updateFilter({ [props.title]: [...value, search] }));
//     } else {
//       dispatch(
//         updateFilter({
//           [props.title]: value.includes(val)
//             ? value.filter((v) => v !== val)
//             : [...value, val],
//         })
//       );

//       setValue((current) =>
//         current.includes(val)
//           ? current.filter((v) => v !== val)
//           : [...current, val]
//       );
//     }
//   };

//   const handleValueRemove = (val) => {
//     dispatch(updateFilter({ [props.title]: value.filter((v) => v !== val) }));
//     setValue((current) => current.filter((v) => v !== val));
//   };

//   const values = value.slice(0, 1).map((item) => (
//     <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
//       {item}
//     </Pill>
//   ));

//   const options = data
//     .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
//     .map((item) => (
//       <Combobox.Option value={item} key={item} active={value.includes(item)}>
//         <Group gap="sm">
//           <Checkbox
//             size="xs"
//             color="caribbeanGreen.4"
//             checked={value.includes(item)}
//             onChange={() => {}}
//             aria-hidden
//             tabIndex={-1}
//             style={{ pointerEvents: "none" }}
//           />
//           <span>{item}</span>
//         </Group>
//       </Combobox.Option>
//     ));

//   return (
//     <Combobox
//       store={combobox}
//       onOptionSubmit={handleValueSelect}
//       withinPortal={false}
//     >
//       <Combobox.DropdownTarget>
//         <PillsInput
//           onClick={() => combobox.openDropdown()}
//           variant="unstyled"
//           rightSection={
//             <Combobox.Chevron className="!text-mine-shaft-100 !w-6 !h-6" />
//           }
//           leftSection={
//             <p className="text-caribbean-green-400 p-2 bg-mine-shaft-900 rounded-full">
//               {props.icon}
//             </p>
//           }
//           onFocus={() => combobox.openDropdown()}
//           onBlur={() => combobox.closeDropdown()}
//           onChange={(event) => {
//             setValue(event.currentTarget.value);
//             combobox.openDropdown();
//             combobox.updateSelectedOptionIndex();
//           }}
//         >
//           <Pill.Group className="ml-2">
//             {value.length > 0 ? (
//               <>
//                 {values}
//                 {value.length > 1 && (
//                   <Pill className="!text-mine-shaft-100 !font-semibold">
//                     +{value.length - 1} more
//                   </Pill>
//                 )}
//               </>
//             ) : (
//               <Input.Placeholder className="!text-mine-shaft-100 font-semibold ">
//                 {props.title}
//               </Input.Placeholder>
//             )}
//           </Pill.Group>
//         </PillsInput>
//       </Combobox.DropdownTarget>

//       <Combobox.Dropdown>
//         <Combobox.Search
//           value={search}
//           onChange={(event) => setSearch(event.target.value)}
//           placeholder="Search"
//         />
//         <ScrollArea.Autosize mah={200} type="scroll">
//           {options.length === 0 ? (
//             <Combobox.Empty>Nothing found</Combobox.Empty>
//           ) : (
//             <Combobox.Options>{options}</Combobox.Options>
//           )}
//         </ScrollArea.Autosize>
//       </Combobox.Dropdown>
//     </Combobox>
//   );
// };

// export default MultiInput;

import React, { useEffect, useState } from "react";
import {
  Checkbox,
>>>>>>> master
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  ScrollArea,
  useCombobox,
} from "@mantine/core";
<<<<<<< HEAD
import { FaSearch } from "react-icons/fa";
=======
import { useDispatch } from "react-redux";
import { updateFilter } from "../../slices/FilterSlice";
>>>>>>> master

const MultiInput = (props) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

<<<<<<< HEAD
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    // onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
=======
  const dispatch = useDispatch();

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
>>>>>>> master
    scrollBehavior: "smooth",
  });

  useEffect(() => {
    setData(props.options);
  }, []);

<<<<<<< HEAD
  const exactOptionMatch = data.some((item) => item === search);
=======
  const exactOptionMatch = data.some(
    (item) => item.toLowerCase() === search.trim().toLowerCase()
  );
>>>>>>> master

  const handleValueSelect = (val) => {
    setSearch("");

    if (val === "$create") {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
<<<<<<< HEAD
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
=======
      dispatch(updateFilter({ [props.title]: [...value, search] }));
    } else {
      const newValue = value.includes(val)
        ? value.filter((v) => v !== val)
        : [...value, val];

      setValue(newValue);
      dispatch(updateFilter({ [props.title]: newValue }));
    }
  };

  const handleValueRemove = (val) => {
    const newValue = value.filter((v) => v !== val);
    setValue(newValue);
    dispatch(updateFilter({ [props.title]: newValue }));
  };
>>>>>>> master

  const values = value.slice(0, 1).map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

<<<<<<< HEAD
  const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
=======
  const filteredOptions = data.filter((item) =>
    item.toLowerCase().includes(search.trim().toLowerCase())
  );

  const options = [
    ...filteredOptions.map((item) => (
>>>>>>> master
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
<<<<<<< HEAD
    ));
=======
    )),

    // Add "+ Create" option if no exact match
    !exactOptionMatch && search.trim() !== "" && (
      <Combobox.Option value="$create" key="create-option">
        + Create "{search}"
      </Combobox.Option>
    ),
  ];
>>>>>>> master

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
