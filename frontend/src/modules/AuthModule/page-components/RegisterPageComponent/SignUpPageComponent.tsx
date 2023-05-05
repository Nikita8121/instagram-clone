import React from "react";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { Box } from "@chakra-ui/react";
import { Question } from "../../components/Question";

export const SignUpPageComponent = () => {
  return (
    <Box mt="12px">
      <RegisterForm styles={{ mb: "10px" }} />
      <Question
        styles={{ my: "10px" }}
        question="Have an account?"
        answer={{ text: "Log in", link: "/auth/signIn" }}
      />
    </Box>
  );
};
