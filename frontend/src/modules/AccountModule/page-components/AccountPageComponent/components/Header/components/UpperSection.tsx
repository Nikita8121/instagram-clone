import { Flex, Button, Text } from "@chakra-ui/react";
import SettingsIcon from "@/shared/assets/icons/settings-icon.svg";
import React from "react";

export const UpperSection = () => {
  return (
    <Flex mt="8px" mb={{ md: "20px" }} alignItems="center">
      <Text textStyle="xl" as="h2">
        nikita_ushk
      </Text>
      <Button ml={{ md: "20px" }}>Edit Profile</Button>
      <Button ml={{ md: "20px" }} variant="icon" leftIcon={<SettingsIcon />} />
    </Flex>
  );
};
