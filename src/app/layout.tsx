import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nkosinathi Simelane | Portfolio",
  description: "Nkosinathi Simelane — Software Engineer & Full-Stack Developer. Available for internships. View my projects and technical case studies.",
  openGraph: {
    title: "Nkosinathi Simelane | Software Engineer Portfolio",
    description: "Architecting systems, solving problems. Available for internships.",
    url: "https://base44.com",
    siteName: "Nkosinathi Simelane Portfolio",
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
