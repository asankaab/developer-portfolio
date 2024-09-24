import { Albert_Sans } from "next/font/google"
import "./app.css";
import Header from "@/components/Header";

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Asanka | Web Developer",
  description: "asanker.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={albertSans.className + ' bg-background'} >
        <Header />
          <div className="h-20 w-full bg-none"></div>
          {children}
      </body>
    </html>
  );
}
