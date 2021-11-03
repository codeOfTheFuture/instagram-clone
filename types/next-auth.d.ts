import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      uid: string;
      username: string;
      name: string;
      image: string;
      email: string;
    };
  }
}
