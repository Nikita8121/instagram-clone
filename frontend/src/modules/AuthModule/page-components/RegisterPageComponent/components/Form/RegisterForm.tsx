import { BlockWrapper } from "@/modules/AuthModule/components/BlockWrapper";
import { Input } from "@/shared/ui/Input";
import React from "react";
import { Center, Wrap, WrapItem, Text, Button } from "@chakra-ui/react";
import { Logo } from "@/shared/ui/Logo";
import { IChakraStylesProp } from "@/shared/types/interfaces/chakra-styles";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, registerSchema } from "@/modules/AuthModule/zod-schemas/register.schema";


export const RegisterForm = ({ styles }: IChakraStylesProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchema> = (data) => console.log(data);

  return (
    <BlockWrapper styles={styles}>
      <Center mt="36px" mb="12px">
        <Logo size="big" />
      </Center>
      <Text
        textAlign="center"
        textStyle="lg"
        fontWeight="semibold"
        color="secondary"
        as="h2"
      >
        Sign up to see photos and videos from your friends.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrap p="1px" my="6px">
          <WrapItem width="100%">
            <Input
              error={errors.email?.message}
              {...register("email")}
              label="Email"
            />
          </WrapItem>
          <WrapItem width="100%">
            <Input
              error={errors.fullName?.message}
              {...register("fullName")}
              label="Full Name"
            />
          </WrapItem>
          <WrapItem width="100%">
            <Input
              error={errors.username?.message}
              {...register("username")}
              label="Username"
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
        <Button type="submit" variant="blue" width="100%">
          Sign Up
        </Button>
      </form>
    </BlockWrapper>
  );
};
