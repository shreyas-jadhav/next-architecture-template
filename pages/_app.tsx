import ApplicationWrapper from "@/client/components/containers/ApplicationWrapper";
import Layout from "@/client/components/Layout";
import createEmotionCache from "@/client/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import * as React from "react";
import { SessionProvider } from "next-auth/react";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ApplicationWrapper>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ApplicationWrapper>
    </CacheProvider>
  );
}
