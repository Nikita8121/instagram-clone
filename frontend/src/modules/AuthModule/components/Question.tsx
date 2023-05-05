import React from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import { BlockWrapper } from "./BlockWrapper";
import { IChakraStylesProp } from "@/shared/types/interfaces/chakra-styles";

interface QuestionProps {
  question: string;
  answer: {
    text: string;
    link: string;
  };
}

export const Question = ({
  question,
  answer,
  styles,
}: QuestionProps & IChakraStylesProp) => {
  return (
    <BlockWrapper
      styles={{
        ...styles,
        display: "flex",
        justifyContent: "center",
        padding: "20px 5px",
      }}
    >
      <Text pr="5px" textStyle="md">
        {question}
      </Text>
      <Text color="blue.main" textStyle="md" as={Link} href={answer.link}>
        {answer.text}
      </Text>
    </BlockWrapper>
  );
};
