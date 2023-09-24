import { Ref } from "react";

import { useController, UseControllerProps } from "react-hook-form";

import { TextField, TextFieldProps } from "@/components";

export type Props = UseControllerProps<any> &
  Omit<TextFieldProps, "onChange" | "value" | "id"> & {
    ref?: Ref<HTMLInputElement>;
  };
export const ControlledTextField: React.FC<Props> = ({
  name,
  rules,
  shouldUnregister,

  control,
  ...textFieldProps
}) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
  });

  return (
    <TextField
      {...{
        onChange,
        value,
        id: name,
        ...textFieldProps,
      }}
    />
  );
};
