import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
  // Добавьте конфигурацию для SCSS
  sassOptions: {
    // Пример настройки путей, если нужно

  },
};

export default nextConfig;
