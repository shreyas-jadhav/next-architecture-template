import theme from "@/client/theme";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    
    // ...add more providers here
    ],
    theme: {
        colorScheme: 'auto',
        brandColor: theme.palette.primary.main,

  },
    secret: process.env.NEXTAUTH_SECRET

});
