import { CameraIcon } from "@radix-ui/react-icons";
import { Meta } from "@storybook/react";

import { Card } from "@/components";

export default {
  title: "Components/Card",
  component: Card,
} as Meta<typeof Card>;

export const Primary = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    title: "Some title",
  },
};

export const PrimaryWithIcon = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    title: "Some title",
    iconComponent: <CameraIcon />,
  },
};

export const PrimaryWithoutTitle = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
};

export const Info = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    variant: "info",
  },
};
