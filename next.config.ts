import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
  // Добавьте конфигурацию для SCSS
  sassOptions: {
    // Пример настройки путей, если нужно
    includePaths: ["./styles"], // если у вас есть папка с глобальными стилями
  },
};

export default nextConfig;
