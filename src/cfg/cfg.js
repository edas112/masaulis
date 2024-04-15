export const cfg = {
  API: {
    HOST:
      process.env.NODE_ENV === 'production'
        ? 'https://api-masaulis-five.vercel.app/'
        : 'http://localhost:3000',
  },
};
