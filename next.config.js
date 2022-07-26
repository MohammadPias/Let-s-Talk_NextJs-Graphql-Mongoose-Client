/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: "http://localhost:5000/graphql",
  }
}

module.exports = nextConfig
