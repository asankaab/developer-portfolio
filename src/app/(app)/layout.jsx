import localFont from "next/font/local";
import { Albert_Sans } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Asanka",
  description: "asanker.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={albertSans.className + ' bg-background'} >
        <Navbar/>
        <div className="container w-full mx-auto px-3 pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
