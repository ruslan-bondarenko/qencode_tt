import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import Credentials from 'next-auth/providers/credentials';
// import { users } from '@/data/users';

export const users = [
  {
    id: "1",
    email: "russ@gmail.com",
    name: "Ruslan Bondarenko",
    password: "12345678",
    role: "admin",
  },
];

export const authConfig: AuthOptions = {
 providers: [
  GoogleProvider({
   clientId: process.env.GOOGLE_CLIENT_ID!,
   clientSecret: process.env.GOOGLE_SECRET!,
  }),
  GitHubProvider({
    clientId: process.env.GITHUB_ID || '',
    clientSecret: process.env.GITHUB_SECRET || ''
  }),
//   Credentials({
//    credentials: {
//      email: { label: 'Email', type: 'email', required: true },
//      password: { label: 'Password', type: 'password', required: true },
//    },
//    async authorize(credentials) {
//      if (!credentials?.email || !credentials.password) return null;

//      const currentUser = users.find(user => user.email === credentials.email)

//      if (currentUser && currentUser.password === credentials.password) {
//        const { password, ...userWithoutPass } = currentUser;

//        return userWithoutPass as User;
//      }
//    }
//  })
 ],
 pages: {
  signIn: '/'
 }
}