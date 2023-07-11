/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v5.airtableusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

// (https://v5.airtableusercontent.com/v1/18/18/1689098400000/gQszcv1WhRmKrv9o74-8gg/f2JVOx4Q_BPPxYHSXHAT8EnBdLmn0C-YstFDcD2rw7CeXkr6jN1wzaUNB91ujvzYG4h8-ZyxaoFRTX6fnIwE6A/qW85QntLoqU5qQu4zFPnr0xxAYWnxBfrLdZx4qMUfVk)
