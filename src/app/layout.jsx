import { Albert_Sans } from "next/font/google"
import "./main.css"

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
          {children}
      </body>
    </html>
  );
}
