import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
  StyleProps,
} from "@chakra-ui/react";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "style" | "placeholder" | "size"
  > {
  label?: string;
  isRequired?: boolean;
  helpMessage?: string;
  styles?: StyleProps;
}

export const Input = ({
  isRequired,
  helpMessage,
  label = "",
  styles = {},
  ...props
}: InputProps) => {
  return (
    <FormControl sx={styles} variant="floating" isRequired={isRequired}>
      <ChakraInput {...props} placeholder=" " />
      {/* It is important that the Label comes after the Control due to css selectors */}
      <FormLabel>{label}</FormLabel>
      <FormHelperText>{helpMessage}</FormHelperText>
      <FormErrorMessage>Your First name is invalid</FormErrorMessage>
    </FormControl>
  );
};
