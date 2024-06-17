import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { optimizePackageImports: [
    "resend",
    "react-scroll-to-top",
    "react-hot-toast",
    "next-intl",
    "@emailjs/browser",
    "@react-email/components",
    "@react-email/render",
    "sass",
    "react-email",
    "react-content-loader"
  ] },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
