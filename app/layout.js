import { Inter } from "next/font/google";
import "./globals.css";

import {Analytics} from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Mango Tree Indian Cuisine",
  description: "The Mango Tree, coming soon to Montgomery. A brand new Indian restaurant serving quality Indian food.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
