import { Box } from "@mui/material";
import React from "react";
import Appbar from "./Appbar";
import Footer from "./Footer";

interface Props {
  navbar?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
// General layout of you application
// You can also customize this in you _app.tsx
// if you want to pass different navbar and layout components
// for specific pages
// you can see it here how it is done
// https://stackoverflow.com/a/66914975/15507251

const Layout = ({ navbar, footer, children }: Props) => {
  return (
    <>
      {navbar !== undefined ? navbar : <Appbar />}
      <Box component="main">{children || null}</Box>
      {footer !== undefined ? footer : <Footer />}
    </>
  );
};

export default Layout;
