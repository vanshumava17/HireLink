<<<<<<< HEAD
import React from "react";
import { useEffect, useState } from "react";
=======
// import React from "react";
// import { useEffect, useState } from "react";
// import { Combobox, InputBase, ScrollArea, useCombobox } from "@mantine/core";

// const SelectInput = (props) => {
//   const [data, setData] = useState([]);
//   const [value, setValue] = useState("");
//   const [search, setSearch] = useState("");

//   const combobox = useCombobox({
//     onDropdownClose: () => combobox.resetSelectedOption(),
//   });

//   useEffect(() => {
//     setData(props.options);
//     setValue(props.form.getInputProps(props.name).value);
//     setSearch(props.value);
//   }, []);

//   const exactOptionMatch = data.some((item) => item === search);
//   const filteredOptions = exactOptionMatch
//     ? data
//     : data.filter((item) =>
//         item?.toLowerCase().includes(search?.toLowerCase().trim())
//       );

//   const options = filteredOptions.map((item) => (
//     <Combobox.Option value={item} key={item}>
//       {item}
//     </Combobox.Option>
//   ));

//   return (
//     <Combobox
//       store={combobox}
//       withinPortal={false}
//       onOptionSubmit={(val) => {
//         if (val === "$create") {
//           setData((current) => [...current, search]);
//           setValue(search);
//           props.form.setFieldValue(props.name, search);
//         } else {
//           setValue(val);
//           setSearch(val);
//           props.form.setFieldValue(props.name, val);
//         }

//         combobox.closeDropdown();
//       }}
//     >
//       <Combobox.Target>
//         <InputBase
//           {...props.form.getInputProps(props.name)}
//           label={props.label}
//           rightSection={<Combobox.Chevron />}
//           leftSection={<props.leftSection />}
//           value={search}
//           onChange={(event) => {
//             combobox.openDropdown();
//             combobox.updateSelectedOptionIndex();
//             setSearch(event.currentTarget.value);
//           }}
//           onClick={() => combobox.openDropdown()}
//           onFocus={() => combobox.openDropdown()}
//           onBlur={() => {
//             combobox.closeDropdown();
//             setSearch(value || "");
//           }}
//           placeholder={props.placeholder}
//           rightSectionPointerEvents="none"
//           withAsterisk
//           className="font-medium [&_label]:!text-md"
//         />
//       </Combobox.Target>

//       <Combobox.Dropdown>
//         <Combobox.Options>
//           <ScrollArea.Autosize mah={120} type="scroll">
//             {options}
//             {!exactOptionMatch && search?.trim()?.length > 0 && (
//               <Combobox.Option value="$create">
//                 + Create {search}
//               </Combobox.Option>
//             )}
//           </ScrollArea.Autosize>
//         </Combobox.Options>
//       </Combobox.Dropdown>
//     </Combobox>
//   );
// };

// export default SelectInput;

import React, { useEffect, useState } from "react";
>>>>>>> master
import { Combobox, InputBase, ScrollArea, useCombobox } from "@mantine/core";

const SelectInput = (props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  useEffect(() => {
<<<<<<< HEAD
    setData(props.options);
    setValue(props.form.getInputProps(props.name).value);
    setSearch(props.value);
  }, []);
=======
    setData(props.options || []);
    const initialValue = props.form?.getInputProps(props.name)?.value || "";
    setValue(initialValue);
    setSearch(initialValue);
  }, [props.options, props.form, props.name]);
>>>>>>> master

  const exactOptionMatch = data.some((item) => item === search);
  const filteredOptions = exactOptionMatch
    ? data
    : data.filter((item) =>
        item?.toLowerCase().includes(search?.toLowerCase().trim())
      );

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

<<<<<<< HEAD
=======
  const handleSubmit = (val) => {
    const newValue = val === "$create" ? search : val;

    if (val === "$create") {
      setData((current) => [...current, search]);
    }

    setValue(newValue);
    setSearch(newValue);
    props.form.setFieldValue(props.name, newValue);
    combobox.closeDropdown();
  };

>>>>>>> master
  return (
    <Combobox
      store={combobox}
      withinPortal={false}
<<<<<<< HEAD
      onOptionSubmit={(val) => {
        if (val === "$create") {
          setData((current) => [...current, search]);
          setValue(search);
          props.form.setFieldValue(props.name, search);
        } else {
          setValue(val);
          setSearch(val);
          props.form.setFieldValue(props.name, val);
        }

        combobox.closeDropdown();
      }}
=======
      onOptionSubmit={handleSubmit}
>>>>>>> master
    >
      <Combobox.Target>
        <InputBase
          {...props.form.getInputProps(props.name)}
          label={props.label}
          rightSection={<Combobox.Chevron />}
<<<<<<< HEAD
          leftSection={<props.leftSection />}
          value={search} 
=======
          leftSection={
            props.leftSection && typeof props.leftSection === "function" ? (
              <props.leftSection />
            ) : null
          }
          value={search}
>>>>>>> master
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
          className="font-medium [&_label]:!text-md"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
<<<<<<< HEAD
        <Combobox.Options>
          <ScrollArea.Autosize mah={120} type="scroll">
=======
        <ScrollArea.Autosize mah={120} type="scroll">
          <Combobox.Options>
>>>>>>> master
            {options}
            {!exactOptionMatch && search?.trim()?.length > 0 && (
              <Combobox.Option value="$create">
                + Create {search}
              </Combobox.Option>
            )}
<<<<<<< HEAD
          </ScrollArea.Autosize>
        </Combobox.Options>
=======
          </Combobox.Options>
        </ScrollArea.Autosize>
>>>>>>> master
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default SelectInput;
