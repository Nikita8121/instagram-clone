import { Box, Wrap } from "@chakra-ui/react";
import Image from "next/image";
import googleImage from "@/shared/assets/images/google.png";
import microsoftImage from "@/shared/assets/images/microsoft.png";
import React from "react";

const imageStyle = {
  height: "40px",
  width: "130px",
};

export const GetApp = () => {
  return (
    <Box>
      <Wrap spacingX="8px" spacingY="10px" justify="center">
        <Image style={imageStyle} src={googleImage} alt="google" />
        <Image style={imageStyle} src={microsoftImage} alt="microsoft" />
      </Wrap>
    </Box>
  );
};
