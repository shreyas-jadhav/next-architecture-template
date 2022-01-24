import AuthRequired from "@/client/components/AuthRequired";
import { Container, Typography, Stack, Avatar, Box } from "@mui/material";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
const Dashboard: NextPage = () => {
  const { data } = useSession();
  return (
    <Container sx={{ py: 3 }}>
      <AuthRequired>
        <Typography variant="h5">Protected Page</Typography>
        <Typography variant="subtitle2" gutterBottom>
          You can view this page because you are signed in.
        </Typography>
        <Stack direction="row" spacing={2} my={2} alignItems="center">
          <Avatar
            src={data?.user?.image?.toString()}
            alt={data?.user?.name || data?.user?.email || ""}
          />
          <Box>
            <Typography>{data?.user?.name}</Typography>
            <Typography variant="caption">{data?.user?.email}</Typography>
          </Box>
        </Stack>
      </AuthRequired>
    </Container>
  );
};

export default Dashboard;
