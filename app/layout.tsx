import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://englishwithriadh.com"),
  title: "English with Riadh — Learn English with a Fulbright Scholar",
  description:
    "Premium English instruction by Riadh Koubaa. 17 years teaching, Fulbright Scholar at UC Santa Barbara, certified trainer from Arizona State University.",
  icons: { icon: "/images/favicon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
