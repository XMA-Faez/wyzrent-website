import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WYZRENT - Luxury Short-Term Rental Management",
  description: "Premium short-term rental management services in Dubai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}