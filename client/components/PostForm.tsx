import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Paper,
  Stack,
  Box,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import { joiResolver } from "@hookform/resolvers/joi";
import { IPost, PostSchema } from "models/post";
import { createPost } from "@/client/data/post";
import toast from "react-hot-toast";
import AuthRequired from "./AuthRequired";

type Props = {};

const PostForm = (props: Props) => {
  const { control, ...methods } = useForm({
    resolver: joiResolver(PostSchema),
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = methods.handleSubmit(async (data) => {
    try {
      setLoading(true);
      await createPost(data as IPost);
      toast.success(`Successfully create post!`);
      methods.reset();
    } finally {
      setLoading(false);
    }
  });
  return (
    <AuthRequired>
      <Container sx={{ py: 3 }}>
        <form onSubmit={handleSubmit}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Paper sx={{ display: "flex" }}>
              <Box p={2}>
                <Typography textAlign="center" variant="h5">
                  Create a Post
                </Typography>
                <Typography textAlign="center">
                  Form Demo with Automatic Joi Validation
                </Typography>
                <Stack
                  p={3}
                  spacing={2}
                  justifyContent="center"
                  display="flex"
                  alignItems="center"
                >
                  <Controller
                    control={control}
                    name="title"
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="Title"
                        helperText={error?.message || "Min 3 Char"}
                        error={!!error}
                        autoFocus
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="description"
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="Description"
                        helperText={error?.message}
                        error={!!error}
                      />
                    )}
                  />

                  <LoadingButton
                    loading={loading}
                    variant="contained"
                    sx={{ mx: 8 }}
                    type="submit"
                  >
                    Submit
                  </LoadingButton>
                </Stack>
              </Box>
            </Paper>
          </Box>
        </form>
      </Container>
    </AuthRequired>
  );
};

export default PostForm;
