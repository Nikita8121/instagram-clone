import React from "react";
import { RegisterForm } from "./components/Form/RegisterForm";
import { Box } from "@chakra-ui/react";

export const RegisterPageComponent = () => {
  return (
    <Box mt="12px">
      <RegisterForm styles={{ mb: "10px" }} />
    </Box>
  );
};
