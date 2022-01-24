import { LinearProgress } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";
import { OnlyChildrenProps } from "../types/general";
import PleaseLogin from "./PleaseLogin";
const AuthRequired = ({ children }: OnlyChildrenProps) => {
  const { status } = useSession();

  if (status === "loading") {
    return <LinearProgress />;
  }

  if (status === "unauthenticated") {
    return <PleaseLogin />;
  }

  return <>{children}</>;
};

export default AuthRequired;
