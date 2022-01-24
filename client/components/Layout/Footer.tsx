import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import appConfig from "@/client/config/appConfig";
import Copyright from "./Copyright";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container>
        <Copyright />
        <Typography
          color="text.secondary"
          variant="subtitle1"
          textAlign="center"
        >
          {appConfig.footer.email}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
