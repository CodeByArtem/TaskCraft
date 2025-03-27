import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Task Craft',
  description: 'Task management app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
