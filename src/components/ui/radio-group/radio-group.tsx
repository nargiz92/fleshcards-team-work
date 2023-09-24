import { FC, ReactNode } from "react";

import * as RadioGroup from "@radix-ui/react-radio-group";

import s from "./radio-group.module.scss";

type Option = {
  label: string;
  value: string;
};
type Props = {
  options: Option[];
  defaultValue?: string;
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  children?: ReactNode;
};
export const RadioGr: FC<Props> = ({
  options,
  children,
  disabled,
  value,
  onValueChange,
  defaultValue,
}) => {
  return (
    <span className={s.radioContent}>
      <RadioGroup.Root
        className={s.root}
        defaultValue="default"
        onValueChange={onValueChange}
      >
        {options.map((option) => {
          return (
            <div className={s.container} key={option.value}>
              <div className={s.itemContainer}>
                <RadioGroup.Item
                  value={option.value}
                  className={s.item}
                  key={option.label}
                >
                  <RadioGroup.Indicator className={s.indicator} />
                </RadioGroup.Item>
              </div>

              <div className={s.label}>{option.label}</div>
            </div>
          );
        })}
      </RadioGroup.Root>
    </span>
  );
};
