export const generateRandomString = () =>
  Math.random().toString(36).substring(2, 7);
export const isAuthenticated = () => !!localStorage.getItem('token');
