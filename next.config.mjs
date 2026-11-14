/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // builds a fully static site for GitHub Pages
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false
};
export default nextConfig;
