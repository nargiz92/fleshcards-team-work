import { useController, UseControllerProps } from "react-hook-form";

import { CheckboxProps, UniversalCheckbox } from "@/components";

export type ControlledCheckboxProps = UseControllerProps<any> & {
  label?: string;
};
// & Omit<CheckboxProps, "onChange" | "value" | "id">;

export const ControlledCheckbox = ({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...checkboxProps
}: ControlledCheckboxProps) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  });

  return (
    <UniversalCheckbox
      {...{
        onValueChange: onChange,
        checked: value,
        id: name,
        ...checkboxProps,
      }}
    />
  );
};
