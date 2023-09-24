import { useState } from "react";

import { Meta, Story } from "@storybook/react";

import { Selected, Props } from "./selected"; // Make sure to import your component correctly

export default {
  component: Selected,
  title: "Components/Selected",
  argTypes: {
    // Define any argTypes here if needed
  },
} as Meta;

// Controlled Mode Story
const Template: Story<Props> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  return (
    <Selected
      {...args}
      value={selectedValue}
      onValueChange={(newValue) => setSelectedValue(newValue)}
    />
  );
};

export const ControlledMode = Template.bind({});
ControlledMode.args = {
  isFullWidth: true,
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // Add more options as needed
  ],
  label: "Select an option",
  placeholder: "Select...",
  required: true,
};

// Uncontrolled Mode Story
export const UncontrolledMode = (args) => <Selected {...args} />;
UncontrolledMode.args = {
  isFullWidth: true,
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // Add more options as needed
  ],
  label: "Select an option",
  placeholder: "Select...",
  required: true,
};
