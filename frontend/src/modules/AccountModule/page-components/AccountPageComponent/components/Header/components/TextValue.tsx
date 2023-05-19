import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const TextValue = () => {
  return (
    <Flex mb={{ md: "20px" }}>
      <Text mr="40px">
        <Text fontWeight="semiBold" as="b">
          7
        </Text>
        &nbsp; Posts
      </Text>
      <Text mr="40px">
        <Text fontWeight="semiBold" as="b">
          7
        </Text>
        &nbsp; Posts
      </Text>
      <Text>
        <Text pr="5px" fontWeight="semiBold" as="b">
          7
        </Text>
        &nbsp; Posts
      </Text>
    </Flex>
  );
};
