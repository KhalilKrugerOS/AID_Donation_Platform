/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //domains: ["utfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      }, {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
// https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yaER4S3NEZDkwMmpKdHlHWXZaMTBNWWJMeUIifQ