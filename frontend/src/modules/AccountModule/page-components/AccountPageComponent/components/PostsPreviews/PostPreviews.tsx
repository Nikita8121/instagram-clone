import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { PostPreviewItem } from "./PostPreviewItem";

export const PostPreviews = () => {
  return (
    <SimpleGrid columns={3} spacing="28px">
      <PostPreviewItem />
      <PostPreviewItem />
      <PostPreviewItem />
      <PostPreviewItem />
      <PostPreviewItem />
    </SimpleGrid>
  );
};
