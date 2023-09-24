import { FC } from "react";

import * as Select from "@radix-ui/react-select";
import { clsx } from "clsx";

import { DownIcon } from "../../../styles/assets/icons";

import s from "./selected.module.scss";

import { Typography } from "@/components";
export type Option =
  | { label: string; value: string }
  | { label: number; value: string };

type Props = {
  variant?: "pagination" | "secondary";
  required?: boolean;

  options: Option[];
  onValueChange: (value: string) => void;
  value: string;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  disabled?: boolean;
  className?: string;
};

export const Selected: FC<Props> = ({
  options,
  placeholder,
  label,
  value,
  onValueChange,

  defaultValue,
  disabled,
  required,
}) => {
  return (
    <form className={s.container}>
      <Typography as={"label"} style={{ color: "#808080" }}>
        {label}
      </Typography>
      <Select.Root
        value={value}
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
      >
        <Select.Trigger className={clsx(s.selectTrigger)} asChild>
          <div>
            <Select.Value placeholder={placeholder} />
            <Select.Icon className={s.selectIcon}>
              <DownIcon />
            </Select.Icon>
          </div>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className={s.selectContent}
            position={"popper"}
            sideOffset={-1}
          >
            <Select.Viewport className={s.selectViewport}>
              {options.map((option) => {
                return (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className={s.item}
                  >
                    <Select.ItemText>{option.label}</Select.ItemText>
                  </Select.Item>
                );
              })}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </form>
  );
};
