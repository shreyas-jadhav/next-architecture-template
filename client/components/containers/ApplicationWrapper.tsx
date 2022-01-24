import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/client/theme";
import appConfig from "@/client/config/appConfig";
import { Toaster } from "react-hot-toast";
interface Props {
  children: React.ReactNode;
}

// you can add all your providers here and wrap around children

const ApplicationWrapper = (props: Props) => {
  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
        <link href="/favicon.ico" rel="icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
        <Toaster />
      </ThemeProvider>
    </>
  );
};

export default ApplicationWrapper;
