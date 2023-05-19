import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Higlights = () => {
  return (
    <Flex ml="24px">
      <Box padding="10px 15px">
        <Box display="flex">
          <Avatar
            width="77px"
            height="77px"
            name="Kola Tioluwani"
            src="https://bit.ly/prosper-baba"
          />
        </Box>
        <Text mt="15px" textStyle="sm" fontWeight="semiBold" textAlign="center">
          Gym
        </Text>
      </Box>
    </Flex>
  );
};
