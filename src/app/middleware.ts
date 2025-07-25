import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: ({ token }) => !!token?.isAdmin,
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
