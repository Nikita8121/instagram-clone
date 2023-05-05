import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
  StyleProps,
} from "@chakra-ui/react";
import {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import { When } from "react-if";

interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "style" | "placeholder" | "size"
  > {
  label?: string;
  error?: string;
  isRequired?: boolean;
  helpMessage?: string;
  styles?: StyleProps;
}

export const Input = forwardRef(
  (
    {
      isRequired,
      error = "",
      helpMessage,
      label = "",
      styles = {},
      disabled,
      readOnly,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <FormControl
        sx={styles}
        variant="floating"
        isRequired={isRequired}
        isInvalid={!!error}
        isDisabled={disabled}
        isReadOnly={readOnly}
      >
        <ChakraInput ref={ref} {...props} placeholder=" " />
        <FormLabel>{label}</FormLabel>
        <When condition={helpMessage}>
          <FormHelperText>{helpMessage}</FormHelperText>
        </When>
        <When condition={error}>
          <FormErrorMessage mt="2px">{error}</FormErrorMessage>
        </When>
      </FormControl>
    );
  }
);
