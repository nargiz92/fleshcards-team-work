import { ComponentProps, forwardRef, KeyboardEvent, useState } from "react";
import * as React from "react";

import { clsx } from "clsx";

import s from "./text-field.module.scss";

import { Typography } from "@/components";
import { CloseEyeIcon } from "@/styles/assets/icons/close-eye-icon";
import { EyeIcon } from "@/styles/assets/icons/eye-icon";
import { SearchIcon } from "@/styles/assets/icons/search-icon";

export type TextFieldProps = {
  errorMessage?: string;
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;

  type?: "text" | "password" | "search";
  placeholder?: string;
  label?: string;
} & ComponentProps<"input">;
export const TextField = /* @__PURE__ */ forwardRef<
  HTMLInputElement,
  TextFieldProps
>(({ type, placeholder, label, errorMessage, ...rest }, ref) => {
  const [visibility, setVisibility] = useState(false);
  let inputType;

  if (type === "password") {
    inputType = visibility ? "text" : "password";
  } else if (type == "search") {
    inputType = "search";
  } else {
    inputType = type;
  }

  const togglePasswordVisibility = () => {
    setVisibility((prevState) => !prevState);
  };
  const passwordIcon = type === "password" && (
    <span
      onClick={togglePasswordVisibility}
      className={clsx(visibility ? s.closeEye : s.eye)}
    >
      {visibility ? <CloseEyeIcon /> : <EyeIcon />}
    </span>
  );
  const searchIcon = type === "search" && (
    <span className={clsx(s.search)}>
      <SearchIcon />
    </span>
  );
  const inputClassName = `${s.textField} ${errorMessage ? s.error : ""} ${
    type === "password" ? s.paddingRight : ""
  } ${type === "search" ? s.paddingLeft : ""}`;

  return (
    <div className={s.container}>
      {label && (
        <Typography variant={"body2"} as={"label"} style={{ color: "#808080" }}>
          {label}
        </Typography>
      )}

      <label className={s.ps}>
        {passwordIcon}
        {searchIcon}

        <input
          type={inputType}
          ref={ref}
          className={inputClassName}
          {...rest}
          placeholder={placeholder}
        />
      </label>
      <Typography variant={"errorMessage"} className={s.error}>
        {errorMessage}
      </Typography>
    </div>
  );
});
