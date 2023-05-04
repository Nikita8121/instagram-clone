import React from "react";
import LogoIcon from "@/shared/assets/images/logo.svg";

type logoSize = "big" | "small";

interface LogoProps {
  size?: logoSize;
}

export const Logo = ({ size = "small" }: LogoProps) => {
  return (
    <LogoIcon
      width={size === "big" ? "175px" : "103px"}
      height={size === "big" ? "50px" : "29px"}
    />
  );
};
