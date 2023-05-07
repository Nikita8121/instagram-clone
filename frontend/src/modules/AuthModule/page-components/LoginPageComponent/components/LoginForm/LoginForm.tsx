import { BlockWrapper } from "@/modules/AuthModule/components/BlockWrapper";
import { Input } from "@/shared/ui/Input";
import React from "react";
import { Center, Wrap, WrapItem, Text, Button } from "@chakra-ui/react";
import { Logo } from "@/shared/ui/Logo";
import { IChakraStylesProp } from "@/shared/types/interfaces/chakra-styles";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInSchema,
  SignInSchema,
} from "@/modules/AuthModule/zod-schemas/sign-in.schema";
import { signIn } from "next-auth/react";
import { Divider } from "@/shared/ui/Divider";

export const LoginForm = ({ styles }: IChakraStylesProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<SignInSchema> = async (data) => {
    const response = await signIn("login", {
      ...data,
      redirect: false,
    });
  };

  return (
    <BlockWrapper styles={styles}>
      <Center mt="36px" mb="12px">
        <Logo size="big" />
      </Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrap p="1px" my="6px">
          <WrapItem width="100%">
            <Input
              error={errors.emailOrUsername?.message}
              {...register("emailOrUsername")}
              label="Email"
            />
          </WrapItem>
          <WrapItem width="100%">
            <Input
              error={errors.password?.message}
              {...register("password")}
              label="password"
            />
          </WrapItem>
        </Wrap>
        <Button mt="10px" type="submit" variant="blue" width="100%">
          Log in
        </Button>
      </form>
      <Divider styles={{ my: "15px" }} text="or" />
      <Text
        mb="15px
      "
        textAlign="center"
        textStyle="md"
        color="secondary"
      >
        Forgot password?
      </Text>
    </BlockWrapper>
  );
};
