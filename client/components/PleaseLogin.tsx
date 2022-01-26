import { Box, Typography, Button, Alert, AlertTitle } from "@mui/material";
import React from "react";
import { signIn } from "next-auth/react";
type Props = {};

const PleaseLogin = (props: Props) => {
  return (
    <Box
      display="flex"
      py={2}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Alert severity="warning">
        <AlertTitle>Please Login or Sign Up</AlertTitle>
        This content required authentication.
      </Alert>
      <Button
        color="primary"
        sx={{
          my: 2,
        }}
        variant="outlined"
        onClick={() => signIn()}
      >
        Click here to Login or Sign Up
      </Button>
    </Box>
  );
};

export default PleaseLogin;
