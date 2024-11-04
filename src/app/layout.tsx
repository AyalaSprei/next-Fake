// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fake Store",
  description: "Welcome to the Fake Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="header">
          <h1 className="logo">Fake Store</h1>
          <nav className="nav">
            <Link className="nav-link" href="/">Home</Link>
            <Link className="nav-link" href="/jewelry">Jewelry</Link>
            <Link className="nav-link" href="/electronics">Electronics</Link>
            <Link className="nav-link" href="/books">Books</Link>
          </nav>
        </header>
        <main>{children}</main> {/* This renders each page's content */}
      </body>
    </html>
  );
}
