import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App Foundation",
  description: "Next.js application foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Navbar */}
        <nav className="bg-gray-900 text-white p-4 shadow-md flex gap-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link>
          <Link href="/profile" className="hover:text-blue-400 transition-colors">Profile</Link>
          <Link href="/health" className="hover:text-blue-400 transition-colors">Health Check</Link>
        </nav>

        
        <main className="flex-1 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}