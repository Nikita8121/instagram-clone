import { Box } from "@chakra-ui/react";
import React from "react";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Question } from "../../components/Question";

export const LoginPageComponent = () => {
  return (
    <Box mt="12px">
      <LoginForm />
      <Question
        styles={{ my: "10px" }}
        question="Don't have an account?"
        answer={{ text: "Sign up", link: "/auth/signUp" }}
      />
    </Box>
  );
};
