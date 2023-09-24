import { Navigate, useNavigate } from "react-router-dom";

import { SignUp } from "@/components";
import { useSignUpMutation } from "@/services";
import { useAppSelector } from "@/services/store";

export const SignUpPage = () => {
  const [signUp, { isSuccess }] = useSignUpMutation();
  const handleSignUp = (data: any) => {
    const { passwordConfirmation, ...rest } = data;

    signUp(rest);
    if (isSuccess) return <Navigate to={"/login"} />;
  };

  return <SignUp onSubmit={handleSignUp}></SignUp>;
};
