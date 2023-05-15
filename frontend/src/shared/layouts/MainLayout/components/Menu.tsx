import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "@/shared/ui/Logo";
import HomeIcon from "@/shared/assets/icons/home-icons.svg";
import SearchIcon from "@/shared/assets/icons/search-icon.svg";
import ExploreIcon from "@/shared/assets/icons/expolore-icon.svg";
import ReelsIcon from "@/shared/assets/icons/reels-icon.svg";
import MessagesIcon from "@/shared/assets/icons/messages-icon.svg";
import NotificationIcon from "@/shared/assets/icons/notification-icon.svg";
import CreateIcon from "@/shared/assets/icons/create-icon.svg";
import OptionsIcon from "@/shared/assets/icons/options-icon.svg";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  return (
    <>
      <Flex
        padding="8px 12px 20px 12px"
        borderRight="1px solid var(--chakra-colors-secondaryLight);"
        width={{ lg: "244px" }}
        direction="column"
      >
        <Box padding="30px 12px 16px 12px" mb="19px">
          <Logo size="small" />
        </Box>
        <Box>
          <MenuItem text="Home" icon={<HomeIcon />} />
          <MenuItem text="Search" icon={<SearchIcon />} />
          <MenuItem text="Explore" icon={<ExploreIcon />} />
          <MenuItem text="Reels" icon={<ReelsIcon />} />
          <MenuItem text="Messagges" icon={<MessagesIcon />} />
          <MenuItem text="Notifications" icon={<NotificationIcon />} />
          <MenuItem text="Create" icon={<CreateIcon />} />
        </Box>
        <MenuItem mt="auto" text="More" icon={<OptionsIcon />} />
      </Flex>
    </>
  );
};
