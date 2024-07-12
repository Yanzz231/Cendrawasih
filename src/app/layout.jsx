import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cendrawasih",
  description: "Website Cendrawasih",
  icons: {
    icon: "/image/Logo_Cendrawasih.png",
    shortcut: "/image/Logo_Cendrawasih.png",
    apple: "/image/Logo_Cendrawasih.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
