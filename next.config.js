/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  async redirects() {
    return [
      {
        source: "/ar",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
