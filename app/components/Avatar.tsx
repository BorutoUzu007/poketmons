import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import React from "react";

interface imageProp {
  image: string;
}
  

  const AvatarIcon: React.FC<imageProp> = ({image}) => {
    return (
      <Avatar>
        <AvatarImage src={image || "https://github.com/shadcn.png"} alt="@Profile" />
        <AvatarFallback>Profile</AvatarFallback>
      </Avatar>
    )
  }
  
  export default AvatarIcon;