import { FC, ReactNode, useState } from "react";

import { navigate } from "@storybook/addon-links";
import { Navigate, useNavigate } from "react-router-dom";

import s from "./header.module.scss";

import { DrobDownMenuItemRadix, UniversalDropDawnMenu } from "@/components";
import { useGetMeQuery, useLogoutMutation } from "@/services";
import { useAppSelector } from "@/services/store";
import { LogOutIcon } from "@/styles/assets/icons/log-out-icon";
import { UsersIcon } from "@/styles/assets/icons/user-icon";

type Props = {
  logo?: string;
  userName?: string;
  children?: ReactNode;
};

export const Header: FC<Props> = ({ logo, userName, children }) => {
  const navigate = useNavigate();
  // const name = useAppSelector((state) => state.authSlice.user.name);
  const [logout] = useLogoutMutation();

  console.log(name);
  const { data: myData } = useGetMeQuery();
  const myNick = myData.name;

  const [selectedItem, setSelectedItem] = useState("unknown");

  const userEmail = myData.email;

  const setItem = (e: React.MouseEvent<HTMLDivElement>, path: string) => {
    const target = e.target as HTMLDivElement;

    setSelectedItem(target.textContent ?? "unknown");
    navigate(path);
  };

  return (
    <div className={s.headerContainer}>
      <span>{logo}</span>
      <div className={s.nameAndMenu}>
        {myNick}
        {children}

        <UniversalDropDawnMenu
          isTooltip={false}
          variant={"withAvatar"}
          isAvatar={true}
          nickName={myNick}
          email={userEmail}
        >
          <DrobDownMenuItemRadix
            icon={<UsersIcon />}
            text={"My Profile"}
            onSelect={(e) => setItem(e, "/profile")}
          ></DrobDownMenuItemRadix>
          <DrobDownMenuItemRadix
            icon={<LogOutIcon />}
            text={"Sign Out"}
            onSelect={logout}
          ></DrobDownMenuItemRadix>
        </UniversalDropDawnMenu>
      </div>
    </div>
  );
};
