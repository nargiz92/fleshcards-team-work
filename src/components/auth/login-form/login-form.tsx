import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import s from "./login-form.module.scss";

import {
  Button,
  Card,
  ControlledCheckbox,
  ControlledTextField,
} from "@/components";
import { loginSchema } from "@/utils";

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
  onSubmit: (data: LoginFormSchema) => void;
};
type LoginFormSchema = z.infer<typeof loginSchema>;

export const LoginForm = ({ onSubmit }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const onHandlerSubmit = (data: LoginFormSchema) => {
    onSubmit(data);
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };
  const handleForgotPassword = () => {
    navigate("/forgot_password");
  };

  return (
    <Card title={"Sign in"}>
      <form onSubmit={handleSubmit(onHandlerSubmit)}>
        <DevTool control={control} />
        <ControlledTextField
          control={control}
          name={"email"}
          label={"Email"}
          errorMessage={errors.email?.message}
        />
        <ControlledTextField
          control={control}
          name={"password"}
          label={"Password"}
          errorMessage={errors.password?.message}
          type={"password"}
        />
        <ControlledCheckbox
          label={"Remember me"}
          control={control}
          name={"rememberMe"}
        />
        <div className={s.forgotBtnContainer}>
          <Button variant={"link"} onClick={handleForgotPassword}>
            Forgot password?
          </Button>
        </div>

        <Button type="submit" fullWidth={true}>
          Submit
        </Button>
      </form>
      <div className={s.haveAccountContainer}>
        <a className={s.haveAccount}>{"Don't have account?"}</a>
      </div>
      <div className={s.signUpContainer}>
        <Button variant={"link"} className={s.buttonUp} onClick={handleSignUp}>
          Sign up?
        </Button>
      </div>
    </Card>
  );
};
