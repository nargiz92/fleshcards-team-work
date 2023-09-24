import type { Meta, StoryObj } from "@storybook/react";
import { SignUp } from "src/components/auth/sign-up/sign-up";

const meta = {
  title: "Auth/SignUp",
  component: SignUp,
  tags: ["autodocs"],
} satisfies Meta<typeof SignUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
