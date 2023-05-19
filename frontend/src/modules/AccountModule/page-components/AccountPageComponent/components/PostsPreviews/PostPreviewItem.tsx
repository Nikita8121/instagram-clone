import { Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import TestImage from "@/shared/assets/test/inst.jpg";

export const PostPreviewItem = () => {
  return (
    <Box>
      <Image src={TestImage} alt="" />
    </Box>
  );
};
