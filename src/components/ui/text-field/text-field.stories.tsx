import { useState } from "react";

import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import { TextField } from "./text-field";

const meta = {
  title: "Components/Textfield",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["errorMessage"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: ComponentStory<typeof TextField> = (args) => {
  // render: (args) => {
  const [value, setValue] = useState("");

  return (
    <TextField
      {...args}
      value={value}
      onValueChange={(e) => setValue(e.currentTarget.value)}
    />
  );
};
