import { FC } from "react";

import s from "./check-email.module.scss";

import { Button, Card } from "@/components";
import { CheckEmailIcon } from "@/styles/assets/icons/check-email-icon";

type Props = {
  email: string;
  onClick: () => void;
};

export const CheckEmail: FC<Props> = ({ onClick, email }) => {
  const onHandlerSubmit = () => {
    onClick();
  };

  console.log(email);

  return (
    <Card title={"Check email"}>
      <div className={s.checkEmailContainer}>
        <div className={s.imgContainer}>
          <CheckEmailIcon />
        </div>

        <a className={s.forgotBtn}>
          We’ve sent an Email with instructions to {email}
        </a>
      </div>

      <Button type="submit" fullWidth={true} onClick={onHandlerSubmit}>
        Back to Sign in
      </Button>
    </Card>
  );
};
