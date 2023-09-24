import { FC } from "react";
import * as React from "react";

import * as CheckboxRadix from "@radix-ui/react-checkbox";
import * as Label from "@radix-ui/react-label";
import { clsx } from "clsx";

import { CheckedIcon } from "../../../styles/assets/icons";

import s from "./checkbox.module.scss";

import { Typography } from "@/components";

export type CheckboxProps = {
  checked: boolean;
  onValueChange: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  id?: string;
};

export const UniversalCheckbox: FC<CheckboxProps> = ({
  checked,
  onValueChange,
  disabled,
  required,
  label,
  id,
}) => {
  return (
    <div className={s.container}>
      <Label.Root className={clsx(s.label, disabled && s.disabled)}>
        <div className={clsx(s.buttonWrapper, disabled && s.disabled)}>
          <CheckboxRadix.Root
            className={`${s.root} ${disabled && s.disabled}`}
            checked={checked}
            onCheckedChange={onValueChange}
            disabled={disabled}
            required={required}
            id={id}
          >
            {checked && (
              <CheckboxRadix.Indicator className={s.indicator}>
                <CheckedIcon />
              </CheckboxRadix.Indicator>
            )}
          </CheckboxRadix.Root>
        </div>
        {label && (
          <Typography
            variant={"body2"}
            as={"label"}
            style={{ color: "#808080" }}
          >
            {label}
          </Typography>
        )}
      </Label.Root>
    </div>
  );
};
