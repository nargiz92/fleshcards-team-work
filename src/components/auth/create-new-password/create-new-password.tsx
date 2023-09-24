import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import s from "./create-new-password.module.scss";

import { Button, Card, ControlledTextField } from "@/components";

type FormValues = {
  password: string;

  onSubmit: (data: LoginFormSchema) => void;
};
type LoginFormSchema = z.infer<typeof loginSchema>;
const loginSchema = z.object({
  password: z.string().min(3),
});

export const CreateNewPassword = ({ onSubmit }) => {
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

  return (
    <Card title={"Creat new password"}>
      <form onSubmit={handleSubmit(onHandlerSubmit)}>
        <ControlledTextField
          control={control}
          name={"password"}
          label={"Password"}
          errorMessage={errors.password?.message}
          type={"password"}
          fullWidth={true}
        />

        <div className={s.forgotBtnContainer}>
          <a className={s.forgotBtn}>
            Create new password and we will send you further instruction to
            email
          </a>
        </div>

        <Button type="submit" fullWidth={true}>
          Create New Password
        </Button>
      </form>
    </Card>
  );
};
