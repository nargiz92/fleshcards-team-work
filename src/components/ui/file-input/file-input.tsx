import { ChangeEvent, FC, useRef } from "react";

import { clsx } from "clsx";

import s from "./file-input.module.scss";

import { Button } from "@/components";
import exampleImg from "@/styles/assets/icons/image-svgrepo-com.svg";
type Props = {
  savePhoto: (photo: string[]) => void;
  photo: string;
  isFullWidth: boolean;
};
export const FileInput: FC<Props> = ({ savePhoto, photo, isFullWidth }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const selectPhotoHandler = () => {
    inputRef && inputRef.current?.click();
  };
  const onMainFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  };

  return (
    <>
      <div className={s.userPhotoBlock}>
        <img
          className={clsx(s.someUserPhotos, isFullWidth && s.isFullWidth)}
          src={photo || exampleImg}
        />
      </div>

      <Button
        className={s.containers}
        fullWidth={true}
        variant={"secondary"}
        onClick={selectPhotoHandler}
      >
        Change cover
      </Button>

      <input
        accept="image/*"
        type={"file"}
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onMainFileSelected}
      />
    </>
  );
};
