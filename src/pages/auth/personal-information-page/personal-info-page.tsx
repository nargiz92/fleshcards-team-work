import { ChangeEvent } from "react";

import { PersonalInformation } from "@/components";
import {
  useGetMeQuery,
  useLogoutMutation,
  useUpdatedUserDataMutation,
} from "@/services";
import { setUpdatedName } from "@/services/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "@/services/store";

export const PersonalInfoPage = () => {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const { data: me } = useGetMeQuery();
  const [userDataForUpdate] = useUpdatedUserDataMutation();
  const nickForUpdate = useAppSelector(
    (state) => state.authSlice.nickForChange,
  );
  const handleLogout = () => {
    logout();
  };
  const setNewName = (name: string) => {
    dispatch(setUpdatedName(name));
  };
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.currentTarget.value);
  };
  const handleChangePhoto = () => {};
  const handleSaveChanges = () => {
    console.log(me.name);
    userDataForUpdate({
      name: nickForUpdate,
      email: me.email,
    });
  };

  return (
    <PersonalInformation
      onClickLogout={handleLogout}
      email={me.email}
      nick={me.name}
      onChangeName={handleChangeName}
      onChangePhoto={handleChangePhoto}
      onSaveChanges={handleSaveChanges}
      valueOfName={nickForUpdate}
    />
  );
};
