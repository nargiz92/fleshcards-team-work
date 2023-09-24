import { ComponentPropsWithoutRef, ElementType, FC, ReactNode } from "react";

import * as Tabs from "@radix-ui/react-tabs";
import { clsx } from "clsx";

import s from "./tab.module.scss";

export type TabProps = {
  title: string;
  value: string;
  disabled?: boolean;
};
type CommonProps = {
  tabs: TabProps[];
  children?: ReactNode;
  onValueChange: (value?: string) => void;
  defaultValue?: string;
  value?: string;
  fullWidth?: boolean;
};

export const Tab: FC<CommonProps> = ({
  tabs,
  value,
  defaultValue,
  onValueChange,
  children,
  fullWidth,
}) => {
  return (
    <Tabs.Root
      onValueChange={onValueChange}
      value={value}
      defaultValue={defaultValue}
      className={s.roots}
    >
      <Tabs.List className={clsx(s.list)}>
        {tabs.map((t) => (
          <Tabs.Trigger
            className={clsx(s.tabsTrigger, fullWidth && s.fullWidth)}
            value={t.value}
            disabled={t.disabled}
            key={t.value}
          >
            {t.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {children}
    </Tabs.Root>
  );
};

type TabContentProps = {
  value: string;
  children: ReactNode;
};
export const TabContent: FC<TabContentProps> = ({ value, children }) => {
  return (
    <Tabs.Content className={s.content} value={value}>
      {children}
    </Tabs.Content>
  );
};
