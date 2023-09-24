import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import s from "./forgot-password.module.scss";

import { Button, Card, ControlledTextField } from "@/components";

type FormValues = {
  email: string;
  onSubmit: (data: LoginFormSchema) => void;
};
type LoginFormSchema = z.infer<typeof loginSchema>;
const loginSchema = z.object({
  email: z.string().email(),
});

export const ForgotPassword = ({ onSubmit }) => {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onHandlerSubmit = (data: LoginFormSchema) => {
    onSubmit(data);
  };
  const handleTryLog = () => {
    navigate("/login");
  };

  return (
    <Card title={"Forgot your password?"}>
      <form onSubmit={handleSubmit(onHandlerSubmit)}>
        <ControlledTextField
          control={control}
          name={"email"}
          label={"Email"}
          errorMessage={errors.email?.message}
        />
        <div className={s.forgotBtnContainer}>
          <a className={s.forgotBtn}>
            Enter your email address and we will send you further instruction
          </a>
        </div>

        <Button type="submit" fullWidth={true}>
          Send instuctions
        </Button>
        <div className={s.haveAccountContainer}>
          <a className={s.haveAccount}>Did you remember your password?</a>
        </div>
      </form>
      <div className={s.buttonContainer}>
        <Button variant={"link"} className={s.buttonUp} onClick={handleTryLog}>
          Try logging in?
        </Button>
      </div>
    </Card>
  );
};
