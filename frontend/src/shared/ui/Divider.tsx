import { Box, Flex, StyleProps, Text } from "@chakra-ui/react";
import React from "react";
import { IChakraStylesProp } from "../types/interfaces/chakra-styles";

export const Divider = ({
  text,
  styles,
}: {
  text: string;
} & IChakraStylesProp) => {
  return (
    <Flex sx={{ ...styles }} alignItems="center" justifyContent="space-between">
      <Box backgroundColor="secondaryLight" h="1px" w=" fill-available"></Box>
      <Text textStyle="md" mx="18px" color="secondary" fontWeight="semiBold">
        {text}
      </Text>
      <Box w="fill-available" h="1px" backgroundColor="secondaryLight"></Box>
    </Flex>
  );
};
