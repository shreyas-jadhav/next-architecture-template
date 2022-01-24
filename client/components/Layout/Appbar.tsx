import React from "react";
import Link from "next/link";
import MuiAppBar from "@mui/material/AppBar";
import {
  Toolbar,
  Typography,
  Button,
  Grid,
  Avatar,
  CircularProgress,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/system";
import appConfig from "@/client/config/appConfig";
import { useSession, signIn, signOut } from "next-auth/react";
interface Props {
  children: React.ReactElement;
}

const Appbar = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  return (
    <ElevationScroll>
      <MuiAppBar position="sticky" component="nav">
        <StyledToolbar>
          <Link href={`/`} passHref>
            <Typography sx={{ flexGrow: 1 }} variant="h6">
              {appConfig.title}
            </Typography>
          </Link>
          <div>
            <Grid container component="div" spacing={2} alignItems="center">
              <Grid item>
                <Link href={`/dashboard`} passHref>
                  <Button color="inherit">Protected Page</Button>
                </Link>
              </Grid>
              <Grid item>
                {status == "loading" && <CircularProgress color="secondary" />}
                {status == "authenticated" && user && (
                  <Grid container alignItems="center" spacing={1}>
                    <Grid
                      item
                      justifyContent="end"
                      alignContent="center"
                      alignItems="center"
                    >
                      <Avatar
                        alt={user?.name || user?.email || undefined}
                        src={user?.image?.toString()}
                      />
                    </Grid>
                    <Grid item>
                      <Button color="inherit" onClick={() => signOut()}>
                        Sign Out
                      </Button>
                    </Grid>
                  </Grid>
                )}
                {status == "unauthenticated" && (
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => signIn()}
                  >
                    Sign In
                  </Button>
                )}
              </Grid>
            </Grid>
          </div>
        </StyledToolbar>
      </MuiAppBar>
    </ElevationScroll>
  );
};
export default Appbar;

function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  flexWrap: "wrap",
  flexDirection: "row",
  padding: theme.spacing(2),
}));
