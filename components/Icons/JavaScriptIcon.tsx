import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";

function JavaScriptIcon(props: IconProps): JSX.Element {
  return (
    <Icon viewBox="0 0 45 45" {...props}>
      <path
        d="M0.1875 0.188965V44.814H44.8125V0.188965H0.1875ZM24.0937 34.853C24.0937 39.197 21.5278 41.3147 17.8134 41.3147C14.4585 41.3147 12.5112 39.5775 11.523 37.4807L14.9377 35.4138C15.5961 36.5822 16.0961 37.5704 17.5335 37.5704C18.7288 37.5704 19.7109 37.0315 19.7109 34.9347V20.9077H24.0937V34.853ZM33.9899 41.2151C30.0962 41.2151 27.5801 39.458 26.3519 37.0315L29.7715 35.0522C30.668 36.5205 31.8384 37.4986 33.9053 37.4986C35.6424 37.4986 36.6515 36.7297 36.6515 35.5314C36.6515 34.094 35.6126 33.585 33.6951 32.7423L32.6472 32.2921C29.6211 31.0051 27.6149 29.3875 27.6149 25.9718C27.6149 22.8272 30.0105 20.5302 33.7548 20.5302C36.4214 20.5302 38.3369 21.3589 39.7165 23.7854L36.4453 25.8882C35.7261 24.6002 34.9512 24.0952 33.7499 24.0952C32.5217 24.0952 31.7427 24.8742 31.7427 25.8882C31.7427 27.1462 32.5217 27.6552 34.3186 28.4342L35.3665 28.8834C38.9315 30.4114 40.9387 31.9713 40.9387 35.4736C40.9397 39.2488 37.9743 41.2151 33.9899 41.2151Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default JavaScriptIcon;
