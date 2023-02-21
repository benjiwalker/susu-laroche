import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => {
  return (
    <StaticImage
      alt="demon logo"
      height={60}
      loading="eager"
      placeholder="blurred"
      src="../../images/demon.png"
      width={50}
    />
  );
};

export default Logo;
