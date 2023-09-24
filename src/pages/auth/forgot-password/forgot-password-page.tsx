import { Navigate, useNavigate } from "react-router-dom";

import { ForgotPassword, SignUp } from "@/components";
import { Loader } from "@/components/ui/loader/loader";
import {
  useGetMeQuery,
  useLoginMutation,
  useRecoverPasswordMutation,
  useSignUpMutation,
} from "@/services";

export const ForgotPasswordPage = () => {
  const [passwordsRecover, { isSuccess }] = useRecoverPasswordMutation();

  // console.log(passwordsRecover);
  // const requestBody = {
  //   html: '<h1>Hi, ##name##</h1><p>Click <a href="http:/localhost:5173/reset-password/##token##\\">here</a> to recover your password</p>',
  //   email: passwordsRecover.email,
  //   subject: "Password Recovery",
  // };
  const handleRecoverPassword = (data) => {
    passwordsRecover(data);
  };

  if (isSuccess) return <Navigate to={"/check-email"} />;

  return <ForgotPassword onSubmit={handleRecoverPassword}></ForgotPassword>;
};
