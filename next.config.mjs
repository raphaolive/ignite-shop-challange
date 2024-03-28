/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.stripe.com",
        port: "",
        pathname: "",
      },
    ],
  },
};

// 'https://files.stripe.com/links/MDB8YWNjdF8xT2tZajRJRGllMnk4R2NafGZsX3Rlc3RfV2FIZmhpOHU5WWNzYUFFRjBmYlFEeUds00GhJY8XI0'
