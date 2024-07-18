import NextAuth, {DefaultSession} from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            "id": number,
            "username": string,
            "email": string,
            "firstName": string,
            "lastName": string
            "gender": string,
            "image": string,
            "token": string,
            "refreshToken": string
        } & DefaultSession["user"]
    }

    interface User {
        "id": number,
        "username": string,
        "email": string,
        "firstName": string,
        "lastName": string,
        "gender": string
    }
}
