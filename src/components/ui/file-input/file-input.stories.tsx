import { useState } from "react";

import { Story, Meta } from "@storybook/react";

import { FileInput } from "./file-input";

export default {
  title: "Components/FileInput",
  component: FileInput,
} as Meta;

const Template: Story = (args) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const savePhoto = (photo: string) => {
    setSelectedFile(photo);
  };

  return <FileInput {...args} savePhoto={savePhoto} />;
};

export const Default = Template.bind({});
Default.args = {};
