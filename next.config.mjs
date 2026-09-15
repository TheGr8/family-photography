/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — Azure Static Web Apps serves the `out/` folder.
  output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
