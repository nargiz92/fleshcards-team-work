import { zodResolver } from "@hookform/resolvers/zod";
import { navigate } from "@storybook/addon-links";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import s from "./sign-up.module.scss";

import { Button, Card, ControlledTextField } from "@/components";

type FormValues = {
  email: string;
  password: string;
  onSubmit: (data: LoginFormSchema) => void;
};

const loginSchema = z
  .object({
    email: z.string().email().max(30).default(""),
    password: z
      .string()
      .min(3)
      .max(20)
      .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "Password must contain at least one punctuation symbol",
      })
      .default(""),
    passwordConfirmation: z.string().nonempty("Confirm your password"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirmation) {
      ctx.addIssue({
        message: "Password do not match",
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirmation"],
      });
    }

    return data;
  });

type LoginFormSchema = z.infer<typeof loginSchema>;
export const SignUp = ({ onSubmit }) => {
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
    console.log("SignUp data", data);
    onSubmit(data);
  };
  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <Card title={"Sign up"}>
      <form onSubmit={handleSubmit(onHandlerSubmit)}>
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
        <ControlledTextField
          control={control}
          name={"passwordConfirmation"}
          label={"Confirm password"}
          errorMessage={errors.password?.message}
          type={"password"}
        />

        <Button type="submit" fullWidth={true}>
          Sign up
        </Button>
      </form>
      <>
        <div className={s.haveAccountContainer}>
          <a className={s.haveAccount}>Already have an account?</a>
        </div>
        <div className={s.buttonContainer}>
          <Button
            variant={"link"}
            className={s.buttonUp}
            onClick={handleSignIn}
          >
            Sign in?
          </Button>
        </div>
      </>
    </Card>
  );
};
