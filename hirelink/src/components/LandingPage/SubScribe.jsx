import { Button, Input, TextInput } from "@mantine/core";
import React from "react";

const SubScribe = () => {
  return (
    <div className="mt-15 text-mine-shaft-100 flex items-center justify-between mx-20 bg-mine-shaft-900 rounded-lg p-5 gap-10">
      <div className="text-5xl font-semibold text-center">
        Never Wants to Miss Any Job News ?
      </div>
      <div className="w-1/2 mt-10">
        <TextInput
          size="xl"
          radius="lg"
          placeholder="Your@email.com"
          className="text-mine-shaft-100 w-[81%] bg-mine-shaft-700 p-2 rounded-lg relative"
          variant="unstyled"
          styles={{
            input: { color: "#f6f6f6", fontSize: "18px" },
            label: { fontSize: "18px" },
          }}
        />
        <Button className="!bg-caribbean-green-300 !font-semibold !text-xl absolute bottom-[68px] left-84 !h-[60px] !rounded-lg transition delay-150 ease-in-out hover:!bg-caribbean-green400">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default SubScribe;
