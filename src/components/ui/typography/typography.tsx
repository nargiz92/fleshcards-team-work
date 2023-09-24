import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { clsx } from "clsx";

import s from "./typography.module.scss";

export type TypographyProps<T extends ElementType = "button"> = {
  as?: T;
  children?: ReactNode;
  variant?:
    | "body1"
    | "h1"
    | "h2"
    | "h3"
    | "large"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "overline"
    | "link1"
    | "link2"
    | "errorMessage";
  className?: string;
  color?: "primary" | "secondary" | "inherit";
} & ComponentPropsWithoutRef<T>;

export function Typography<T extends ElementType = "p">({
  as,
  className,
  variant = "body1",
  color = "inherit",
  ...otherProps
}: TypographyProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) {
  const classNames = clsx(s[variant], s[color], className);
  const Component = as || "p";

  return <Component className={classNames} {...otherProps}></Component>;
}
