import { Avatar, Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TextValue } from "./components/TextValue";
import { Bio } from "./components/Bio";
import { Links } from "./components/Links";
import { UpperSection } from "./components/UpperSection";
import { getAccount } from "@/modules/AccountModule/api/get-account";
import { useQuery } from "react-query";

export const Header = () => {
  const { data } = useQuery({
    queryKey: ["account"],
    queryFn: getAccount.request,
  });
  
  return (
    <Flex mb="44px" as="header">
      <Center mr={{ md: "30px" }} flexGrow="1">
        <Avatar
          width="150px"
          height="150px"
          name="Christian Nwamba"
          src="https://bit.ly/code-beast"
        />
      </Center>
      <Box flexGrow="2" as="section">
        <UpperSection />
        <TextValue />
        <Bio />
        <Links />
      </Box>
    </Flex>
  );
};
