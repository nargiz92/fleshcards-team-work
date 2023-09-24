import { useState } from "react";

import { Meta } from "@storybook/react";

import { RadioGr } from "@/components";

const options = [
  {
    value: "apple",
    label: "Apple",
  },
  {
    value: "banana",
    label: "Banana",
  },
  {
    value: "blueberry",
    label: "Blueberry",
  },
  {
    value: "grapes",
    label: "Grapes",
  },
  {
    value: "pineapple",
    label: "Pineapple",
  },
];

export default {
  title: "Components/RadioGroup",
  component: RadioGr,
} as Meta<typeof RadioGr>;

export const Default = {
  render: (args) => {
    const [value, setValue] = useState(null);

    return (
      <>
        <RadioGr {...args} value={value} onChange={setValue} />
        <div>Selected value: {value}</div>
      </>
    );
  },

  args: {
    options,
    disabled: false,
  },
};

export const DefaultDisabled = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};
