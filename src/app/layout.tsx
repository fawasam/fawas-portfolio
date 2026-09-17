import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fawas A M",
  description:
    "Software Engineer & Technical Lead — architecting high-concurrency, fault-tolerant platforms across fintech, healthcare, logistics, and e-commerce.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900 selection:bg-neutral-200">
        {children}
      </body>
    </html>
  );
}
