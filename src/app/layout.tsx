import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akif Kemal Aksu — Senior Backend Developer",
  description:
    "Senior Backend Developer specializing in .NET, microservices, and distributed systems. 6+ years of experience building scalable architectures.",
  keywords: [".NET", "microservices", "backend developer", "C#", "distributed systems"],
  authors: [{ name: "Akif Kemal Aksu" }],
  openGraph: {
    title: "Akif Kemal Aksu — Senior Backend Developer",
    description: "Senior Backend Developer specializing in .NET & Microservices",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        style={{ backgroundColor: "#0d1117", color: "#e6edf3" }}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
