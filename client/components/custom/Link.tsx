import React from "react";
import NextLink from "next/link";
import MuiLink, { LinkProps } from "@mui/material/Link";

interface Props extends LinkProps {
  href: string;
}

const Link = ({ href, ...props }: Props) => {
  return (
    <NextLink href={href.toString()} passHref>
      <MuiLink {...props} />
    </NextLink>
  );
};
export default Link;
