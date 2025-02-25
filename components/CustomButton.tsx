import React from "react";
import { TextStyled, TouchableBTN } from "./CoreStyled";
import { ButtonProps } from "@/types/type";
import { Platform } from "react-native";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "success":
      return "bg-green-500";
    case "danger":
      return "bg-red-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.2px]";
    default:
      return "bg-[#0286ff]";
  }
};
const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const CustomButton = ({ onPress, title, bgVariant = "primary", textVariant = "default", IconLeft, IconRight, className, ...props }: ButtonProps) => {
  return (
    <TouchableBTN
      className={`w-full py-3  rounded-full flex ${Platform.OS === "ios" ? "flex-row" : "flex-row-reverse"} items-center justify-center   ${getBgVariantStyle(bgVariant)} ${className}`}
      onPress={onPress}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <TextStyled className={`text-lg font-bold  ${getTextVariantStyle(textVariant)}`}>{title}</TextStyled>
      {IconRight && <IconRight />}
    </TouchableBTN>
  );
};

export default CustomButton;
