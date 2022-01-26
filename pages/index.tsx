import SideBySideContent from "@/client/components/containers/SideBySideContent";
import Link from "@/client/components/custom/Link";
import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";
import * as React from "react";

const Index: NextPage = () => {
  return (
    <Container sx={{ py: 3 }}>
      <Stack spacing={3}>
        <SideBySideContent
          leftContent={
            <>
              <Typography variant="h5" component="h1" fontWeight="bold">
                Next.JS, MongoDB, MUI, Authentication
              </Typography>

              <Typography variant="h6" component="h2">
                Complete Starter Code for your Next Scalable Project.
              </Typography>
              <Typography
                component="a"
                href="https://next-architecture-docs.vercel.app/"
              >
                Read More About Architecture
              </Typography>
            </>
          }
          rightContent={null}
        />
        <Divider />
        <Typography variant="h4">Demos</Typography>
        <Stack component="ul" spacing={2}>
          <li>
            <Link href={`/dashboard`}>Protected Page</Link>
          </li>
          <li>
            <Link href={`/create`}>Form Demo</Link>
          </li>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
