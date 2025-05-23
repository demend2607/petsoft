import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/shared/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petsoft - Pet daycare soft",
  description: "Take care of people's pets with Petsoft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-sm text-zinc-900 bg-bg`}>{children}</body>
    </html>
  );
}
