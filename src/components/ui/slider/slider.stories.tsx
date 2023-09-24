import { Story, Meta } from "@storybook/react";

import { Ranger } from "./slider";

export default {
  title: "Components/Ranger",
  component: Ranger,
} as Meta;

const Template: Story = (args) => (
  <Ranger
    value1={0}
    value2={0}
    onChange={function (value: number[]): void {
      throw new Error("Function not implemented.");
    }}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  value1: 10,
  value2: 50,
  onChange: (value) => console.log(value),
};
