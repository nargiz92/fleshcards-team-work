import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "body1",
        "h1",
        "h2",
        "h3",
        "large",
        "body2",
        "subtitle1",
        "subtitle2",
        "caption",
        "overline",
        "link1",
        "link2",
      ],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body1: Story = {
  args: {
    variant: "body1",
    children: "length must be more 10",
    color: "inherit",
  },
};
export const Body2: Story = {
  args: {
    variant: "body2",
    children: "length must be more 10",
    color: "inherit",
  },
};

export const H1: Story = {
  args: {
    variant: "h1",
    children: "Secondary Typography",
    color: "secondary",
  },
};
export const H2: Story = {
  args: {
    variant: "h2",
    children: "Tertiary Typography",
    color: "secondary",
  },
};
export const H3: Story = {
  args: {
    variant: "h3",
    children: "Tertiary Typography",
    color: "secondary",
  },
};
export const Large: Story = {
  args: {
    variant: "large",
    children: "Tertiary Typography",
    color: "secondary",
  },
};
export const Subtitle1: Story = {
  args: {
    variant: "subtitle1",
    children: "Tertiary Typography",
    color: "secondary",
  },
};
export const Subtitle2: Story = {
  args: {
    variant: "subtitle2",
    children: "Full Width Typography",
    color: "secondary",
  },
};
export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Full Width Typography",
    color: "secondary",
  },
};
export const Overline: Story = {
  args: {
    variant: "overline",
    children: "Full Width Typography",
    color: "secondary",
  },
};

export const Link1: Story = {
  args: {
    variant: "link1",
    children: "Link that looks like a button",
    as: "a",
    color: "primary",
  },
};
export const Link2: Story = {
  args: {
    variant: "link2",
    children: "Full Width Typography",
    color: "primary",
  },
};
