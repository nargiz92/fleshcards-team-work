import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "@/components";

const meta = {
  title: "Component/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
