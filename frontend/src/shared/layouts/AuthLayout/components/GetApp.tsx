import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import googleImage from "@/shared/assets/images/google.png";
import microsoftImage from "@/shared/assets/images/microsoft.png";
import React from "react";

const imageStyle = {
  height: "40px",
  width: "130px",
  marginRight: "8px",
};

export const GetApp = () => {
  return (
    <Box my="10px">
      <Text textAlign="center" textStyle="md">
        Get App
      </Text>
      <Box mt="10px" display="flex" justifyContent="center">
        <Image style={imageStyle} src={googleImage} alt="google" />
        <Image style={imageStyle} src={microsoftImage} alt="microsoft" />
      </Box>
    </Box>
  );
};
