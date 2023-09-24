import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import { PersonalInformation } from "@/components";
import { Loader } from "@/components/ui/loader/loader";
import { ForgotPasswordPage, SignInPage } from "@/pages/auth";
import { CheckEmailPages } from "@/pages/auth/check-email-pages/check-email-pages";
import { PersonalInfoPage } from "@/pages/auth/personal-information-page";
import { SignUpPage } from "@/pages/auth/sign-up";
import { CardsPage } from "@/pages/cards";
import { Decks } from "@/pages/decks/decks";
import { LearnCardPage } from "@/pages/learn-card";
import { useGetMeQuery } from "@/services";
import { useAppSelector } from "@/services/store";

const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/forgot_password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/check-email",
    element: <CheckEmailPages />,
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Decks />,
  },
  {
    path: "/profile",
    element: <PersonalInfoPage />,
  },
  {
    path: "/cards/:id",
    element: <CardsPage />,
  },
  {
    path: "/learn/:id",
    element: <LearnCardPage />,
  },
];

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
]);

export const Router = () => {
  const { isLoading: isMeLoading } = useGetMeQuery();

  if (isMeLoading) return <Loader />;

  return <RouterProvider router={router} />;
};

function PrivateRoutes() {
  const { data: me, isLoading: isMeLoading } = useGetMeQuery();
  const isAuthenticated = me && me.success !== false;

  // userNick = me.name;
  // userEmail = me.email;
  if (isMeLoading) return <Loader />;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
