import { string } from "zod";

export type LoginArgs = {
  email: string;
  password: string;
  rememBerMe: boolean;
};
export type LoginResponse = {
  accessToken: string;
};
export type MeResponseType = {
  email: string;
  name: string;
  id: string;
  isEmailVerified: boolean;
  avatar: string;
  created: string;
  updated: string;
  success: boolean;
} | null;
export type SignUpRequestBody = {
  html: string;
  name: string;
  password: string;
  email: string;
  subject: string;
  sendConfirmationEmail: boolean;
};

export type SignUpResponse = {
  avatar: string;
  id: string;
  email: string;
  isEmailVerified: boolean;
  name: string;
  created: string;
  updated: string;
};
