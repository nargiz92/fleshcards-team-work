import { useNavigate } from "react-router-dom";

import { CheckEmail } from "@/components";
import { useGetMeQuery } from "@/services";

export const CheckEmailPages = () => {
  const navigate = useNavigate();
  const { data } = useGetMeQuery();
  const handleBackToSignIn = () => {
    navigate("/login");
  };

  return <CheckEmail email={data.email} onClick={handleBackToSignIn} />;
};
