import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD Ajmeer Khaja — Full Stack Web Developer",
  description:
    "Portfolio of MD Ajmeer Khaja, a full stack web developer building React front-ends and Node APIs from Hyderabad, India.",
  openGraph: {
    title: "MD Ajmeer Khaja — Full Stack Web Developer",
    description: "React, Node.js and MongoDB projects, experience and resume.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-body">
        {children}
      </body>
    </html>
  );
}
