import { Inter } from "next/font/google";
import "./globals.css";

import {Analytics} from "@vercel/analytics/next";
import {Providers} from "@/app/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Mango Tree Indian Cuisine",
  description: "The Mango Tree, an Indian restaurant in Montgomery, NJ serving quality authentic Indian cuisine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={'dark'}>
      <body className={inter.className}>
      <Providers>
          {children}
      </Providers>
        <Analytics/>
      </body>
    </html>
  );
}
