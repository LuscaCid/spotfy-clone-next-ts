import type { Metadata } from "next";

import './globals.css'

export const metadata: Metadata = {
  title: "Spotify - listen anywhere",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className='bg-zinc-900 text-zinc-100'>{children}</body>
    </html>
  );
}
