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
              <Typography component="a" href="#about">
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

        <Divider />
        <Typography id="about" variant="h4">
          About
        </Typography>
        <SideBySideContent
          rightContent={null}
          leftContent={
            <>
              <Typography variant="h5" component="h1" fontWeight="bold">
                Server Architecture
              </Typography>
              <Stack component="ul" spacing={2}>
                <li>
                  <Typography>
                    This uses <strong>MongoDB driver</strong>. Note this
                    doesn&apos;t use mongoose, see why{" "}
                    <a href={"#data-validation"}>here</a>.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    All the logic is in{" "}
                    <strong>
                      <code>server/controllers</code>
                    </strong>{" "}
                    and api files only export these controllers. This gives
                    extra flexibility to switch to Express if needed.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    You can add <strong>middlewares</strong> by wrapping your
                    controller with middlewares. Some example code for writing a
                    middleware is given in <code>server/middlewares</code>{" "}
                    folder.
                  </Typography>
                  <Typography>
                    Usage example, <code>withAuth(createPost)</code>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    There is additional <strong>data access layer</strong> which
                    interacts with database. This can allow easily switching
                    databases later.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <strong>Data validation</strong> is done via Joi schemas
                    exported from <code>models</code> folder. And detailed
                    responses are send automatically for invalid data.{" "}
                    <code>models</code> folder also contain all your TypeScript
                    types and interfaces along with their generic Joi schemas.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    All the <strong> error handling</strong> is automatically
                    done via a middleware. All you gotta do is throw the
                    specific errors from anywhere.
                  </Typography>
                  <Typography>
                    Example,{" "}
                    <code>
                      throw new NotFoundError(&apos;Custom Message&apos;)
                    </code>{" "}
                    will automatically take care to send status 404 with given
                    message or &apos;Not Found&apos;.
                  </Typography>
                  <Typography>
                    There are different types of Custom Errors already exported
                    from <code>server/errors</code>. You can always add more
                    when needed.
                  </Typography>
                </li>
              </Stack>
            </>
          }
        />

        <SideBySideContent
          leftContent={
            <>
              <Typography
                variant="h5"
                id="data-validation"
                component="h1"
                fontWeight="bold"
              >
                Data Validation
              </Typography>

              <Typography>
                This Doesn&apos;t use Mongoose. There is Joi and MongoDB native
                driver. Which allows extra flexibility for switching Database
                and ability to use validation schemas in front end. Uses{" "}
                <code>react-hook-from</code> + Joi for front-end validation.
              </Typography>
            </>
          }
          rightContent={<></>}
        />
      </Stack>
    </Container>
  );
};

export default Index;
