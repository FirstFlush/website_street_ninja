const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: false, // Keep your existing config
  };
  
  module.exports = withBundleAnalyzer(nextConfig); // Merge with the analyzer
  

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: false,
// }

// module.exports = nextConfig
