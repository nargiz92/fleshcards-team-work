import { FC, ReactNode, useState } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Tooltip } from "@radix-ui/react-tooltip";
import { clsx } from "clsx";

import { Avatar } from "../avatar-icon";

import s from "./drop-dawn-menu.module.scss";

import { TooltipDemo, Typography } from "@/components";

type Props = {
  isTooltip: boolean;
  children?: ReactNode;
  isAvatar?: true;
  icon?: JSX.Element | string;
  nickName?: string;
  email?: string;
  variant?: "withAvatar" | "withTooltip";
};
export const UniversalDropDawnMenu: FC<Props> = ({
  children,
  isAvatar,
  nickName,
  email,
  isTooltip,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.buttons}>
          {isAvatar ? (
            <Avatar></Avatar>
          ) : (
            <TooltipDemo>chose and select</TooltipDemo>
          )}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal className={s.portal}>
        <DropdownMenu.Content
          className={s.dropdownMenuContent}
          sideOffset={10}
          alignOffset={10}
        >
          <DropdownMenu.Arrow className={s.arrowBox} asChild>
            <div className={s.arrow} />
          </DropdownMenu.Arrow>
          {isAvatar && <DropDownWithAvatar nickName={nickName} email={email} />}
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
type DropDownMenuWithIconType = {
  nickName: string;
  email: string;
};
export const DropDownWithAvatar: FC<DropDownMenuWithIconType> = ({
  nickName,
  email,
}) => {
  return (
    <DropdownMenu.Item className={s.dropdownMenuItemAvatars}>
      <div className={s.iconContainer}>
        <Avatar></Avatar>
      </div>

      <div className={s.text}>
        <Typography variant={"subtitle2"} className={s.nickEmail}>
          {nickName}
        </Typography>
        <Typography
          variant={"link2"}
          className={s.nickEmail}
          color={"secondary"}
        >
          {email}
        </Typography>
      </div>
    </DropdownMenu.Item>
  );
};

type DrobdownMenuItemsRadixType = {
  icon?: JSX.Element | string;
  text: string;
  onSelect: (any) => void;
};
export const DrobDownMenuItemRadix: FC<DrobdownMenuItemsRadixType> = ({
  icon,
  text,
  onSelect,
}) => {
  const isAvatar = clsx(s.isAvatar);
  const isTooltip = clsx(s.tooltip);

  return (
    <DropdownMenu.Item className={s.dropdownMenuItem} onSelect={onSelect}>
      <div className={s.itemIcon}>{icon}</div>
      <Typography variant={"caption"}>{text}</Typography>
    </DropdownMenu.Item>
  );
};
