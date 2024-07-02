import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loader from '../components/Loader/page'
import { ReduxProvider } from "@/redux/provider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Do List",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loader/>
        <ReduxProvider>
          {children}
        </ReduxProvider>
        </body>
    </html>
  );
}
