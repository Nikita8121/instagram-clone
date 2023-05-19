import React from "react";
import { Header } from "./components/Header/Header";
import { Higlights } from "./components/Highlights/Higlights";
import { Text } from "@chakra-ui/react";
import PostsIcon from "@/shared/assets/icons/posts-icon.svg";
import { Tabs } from "@/shared/ui/Tabs";
import { PostPreviews } from "./components/PostsPreviews/PostPreviews";

export const AccountPageComponent = () => {
  const TabsElements = [
    {
      key: {
        value: "POSTS",
        icon: <PostsIcon />,
      },
      value: <PostPreviews />,
    },
    {
      key: {
        value: "Poss",
        icon: <PostsIcon />,
      },
      value: "dw",
    },
    {
      key: {
        value: "Post",
        icon: <PostsIcon />,
      },
      value: "qweqe",
    },
  ];

  return (
    <>
      <Header />
      <Higlights />
      <Tabs elements={TabsElements} />
    </>
  );
};
