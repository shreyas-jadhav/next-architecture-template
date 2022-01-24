import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import appConfig from "@/client/config/appConfig";

export default function Copyright() {
  return (
    <Typography variant="subtitle2" color="text.secondary" align="center">
      {"Copyright © "}
      {appConfig.footer.company}
      {new Date().getFullYear()}.
    </Typography>
  );
}
