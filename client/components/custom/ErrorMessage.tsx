import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
interface Props {
  title?: string;
  message?: string;
}

const ErrorMessage = ({
  title = `An Error Occurred!`,
  message = `Sorry, Something went wrong! Hope we will fix this soon. Please try again later.`,
}: Props) => {
  return (
    <Alert severity="error">
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};

export default ErrorMessage;
