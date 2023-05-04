import { IChakraStylesProp } from "@/shared/types/interfaces/chakra-styles";
import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export const BlockWrapper = ({
  children,
  styles,
}: { children: ReactNode } & IChakraStylesProp) => {
  return (
    <Box
      sx={styles}
      paddingX="40px"
      width="100%"
      border={{ sm: "1px solid rgb(219,219,219)" }}
    >
      {children}
    </Box>
  );
};
