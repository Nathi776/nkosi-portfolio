import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nkosi | Portfolio",
  description: "Nkosi — Software Engineer & Full-Stack Developer. Available for internships. View my projects and technical case studies.",
  openGraph: {
    title: "Nkosi | Software Engineer Portfolio",
    description: "Architecting systems, solving problems. Available for internships.",
    url: "https://base44.com",
    siteName: "Nkosi Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
