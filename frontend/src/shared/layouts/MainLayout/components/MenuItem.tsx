import { Box, Flex, Text, FlexProps } from "@chakra-ui/react";
import { backIn, motion } from "framer-motion";
import React from "react";

interface MenuItemProps extends FlexProps {
  text: string;
  icon: JSX.Element;
}

const itemMotion = {
  hover: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    ease: "easeIn",
    duration: 0.1,
    type: "tween",
  },
  tap: {
    scale: 0.99,
    opacity: "0.8",
    ease: "easeIn",
    duration: 0.1,
  },
};

const iconMotion = {
  hover: {
    scale: 1.015,
    ease: "easeIn",
    duration: 0.1,
    type: "tween",
  },
  tap: {
    scale: 0.93,
    ease: "easeIn",
    duration: 0.05,
  },
};

export const MenuItem = ({ text, icon, ...props }: MenuItemProps) => {
  return (
    <Flex
      variants={itemMotion}
      m="2px 0"
      as={motion.div}
      borderRadius="8px"
      whileHover="hover"
      whileTap="tap"
      cursor="pointer"
      p="12px"
      align="center"
      {...props}
    >
      <motion.div variants={iconMotion}>{icon}</motion.div>
      <Text pl="16px">{text}</Text>
    </Flex>
  );
};
