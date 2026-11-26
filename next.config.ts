import type { NextConfig } from "next";

// Exportación estática para Firebase Hosting (plan Spark, sin servidor).
// `npm run build` genera la carpeta `out/`, que es la que se publica.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
