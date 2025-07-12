import bcrypt from "bcryptjs";
import { getUserByEmail } from "./db";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await getUserByEmail(credentials.email);
        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        console.log("Credentials:", credentials);
        console.log("User from DB:", user);
        console.log("Password match:", isValid);
        console.log("Is admin:", user?.isAdmin);

        if (isValid && user.isAdmin) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
