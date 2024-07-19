// __mocks__/next-auth.js
export const signIn = jest.fn();
export const signOut = jest.fn();
export const useSession = jest.fn(() => ({
  data: null,
  status: "unauthenticated",
}));
export const getSession = jest.fn(() => ({
  data: null,
  status: "unauthenticated",
}));
