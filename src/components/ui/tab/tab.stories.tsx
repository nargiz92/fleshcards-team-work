import { Meta } from "@storybook/react";

import { TabContent, Tab } from "./tab";

export default {
  title: "Components/Tabs",
  component: Tab,
  args: {
    tabs: [
      { value: "tik", title: "tik" },
      { value: "tok", title: "tok" },
      { value: "tak", title: "tak" },
    ],
    defaultValue: "tik",
    children: (
      <>
        <TabContent value="sprints">Контент спринтов</TabContent>
        <TabContent value="weeks">Контент недель</TabContent>
        <TabContent value="subjects">Контент тем</TabContent>
      </>
    ),
  },
} as Meta<typeof Tab>;

export const Primary = {};

export const PrimaryWithDisabled = {
  args: {
    tabs: [
      { value: "tik", title: "tik" },
      { value: "tok", title: "tok" },
      { value: "tak", title: "tak", disabled: true },
    ],
  },
};

export const FullWidth = {
  args: {
    fullWidth: true,
  },
};
