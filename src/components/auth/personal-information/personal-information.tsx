import { ChangeEvent, FC, useRef, useState } from "react";

import s from "./personal-information.module.scss";

import {
  Avatar,
  Button,
  Card,
  Header,
  TextField,
  Typography,
} from "@/components";
import { LogOutIcon } from "@/styles/assets/icons/log-out-icon";
import { PenIcon } from "@/styles/assets/icons/pen-icon";

type Props = {
  nick: string;
  email: string;
  valueOfName: string;
  // photo?: any;
  onChangePhoto?: () => void;
  // isOwner?: boolean;
  // savePhoto: (file: string[]) => void;
  onClickLogout: () => void;
  onChangeName: (e) => void;
  onSaveChanges: () => void;
};

export const PersonalInformation: FC<Props> = ({
  email,
  nick,
  onClickLogout,
  onChangePhoto,
  onChangeName,
  valueOfName,
  onSaveChanges,
}) => {
  const [isShow, setShow] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectPhotoHandler = () => {
    inputRef && inputRef.current?.click();
  };
  const onMainFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      onChangePhoto(event.target.files[0]);
    }
  };
  const handleOnChange = () => {
    setShow(!isShow);
  };
  const handleSave = () => {
    onSaveChanges(), handleOnChange();
  };

  return (
    <>
      <Header></Header>

      <Card>
        <div className={s.titleContainer}>
          <Typography color={"secondary"} variant={"large"}>
            Personal Information
          </Typography>
        </div>
        <div className={s.checkEmailContainer}>
          <div className={s.userPhotoAndButton}>
            <div className={s.userPhotoBlock}>
              <Avatar />
            </div>
            <div className={s.buttonContainer}>
              <button onClick={selectPhotoHandler} className={s.buttonPhoto}>
                <PenIcon />
              </button>
            </div>

            <input
              type={"file"}
              style={{ display: "none" }}
              ref={inputRef}
              onChange={onMainFileSelected}
              accept="image/*"
            />
          </div>
          <div className={s.changeNameContainer}>
            <Typography variant={"h1"} color={"secondary"}>
              {nick}
            </Typography>
            <b className={s.penClick} onClick={handleOnChange}>
              <PenIcon />
            </b>
          </div>
          {isShow ? (
            <div className={s.containerForSave}>
              <TextField
                value={valueOfName}
                onChange={onChangeName}
                label={"Nickmame"}
              ></TextField>
              <Button fullWidth={true} onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          ) : (
            <div>
              <Typography variant={"body2"} style={{ color: "#808080" }}>
                {email}
              </Typography>

              <Button
                variant={"secondary"}
                fullWidth={false}
                onClick={onClickLogout}
              >
                log out
                <LogOutIcon />
              </Button>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};
