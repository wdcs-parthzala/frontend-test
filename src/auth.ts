import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';

async function getUser(email: string, password: string): Promise<any> {
    try {
        const user = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: email,
                password: password,
                expiresInMins: 60, // optional, defaults to 60
            })
        })
            .then(res => res.json())
        return user
    } catch (error) {
        console.error('getUser error:', error)
        return null
    }
}

export const {
    auth,
    signIn,
    signOut,
    handlers: { GET, POST },
} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const user = await getUser(
                    credentials.email as string,
                    credentials.password as string
                );
                if (user.token) {
                    return user;
                }

                return null;
            },
        }),
    ],
});
