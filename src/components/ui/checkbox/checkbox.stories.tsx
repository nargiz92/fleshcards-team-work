import { useState } from "react";

import { Meta } from "@storybook/react";

import { CheckboxProps, UniversalCheckbox } from "./checkbox";

export default {
  title: "Components/UniversalCheckbox",
  component: UniversalCheckbox,
} as Meta<typeof UniversalCheckbox>;

export const Default = {
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(true);

    return (
      <div>
        <UniversalCheckbox
          {...args}
          checked={checked}
          onValueChange={setChecked}
        />
        <div>checked :{String(checked)}</div>
      </div>
    );
  },

  args: {
    label: "Click ",
    disabled: false,
  },
};
