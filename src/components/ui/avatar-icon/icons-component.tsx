import { FC } from "react";

import s from "./icon.module.scss";

import { UserPenIcon } from "@/styles/assets/icons/user-icon-change";
type Props = {
  userIcon?: string;
};
export const Avatar: FC<Props> = ({ userIcon }) => {
  return <span>{userIcon || <UserPenIcon />}</span>;
};
