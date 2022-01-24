import { Grid } from "@mui/material";
import React from "react";

interface Props {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const SideBySideContent = ({ leftContent, rightContent }: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
        {leftContent}
      </Grid>
      <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
        {rightContent}
      </Grid>
    </Grid>
  );
};

export default SideBySideContent;
