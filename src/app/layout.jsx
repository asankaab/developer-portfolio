import { Albert_Sans } from "next/font/google"
import "./main.css"

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
});

// export const metadata = {
//   title: "Asanka | Web Developer",
//   description: "asanker.com",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head> */}
      <body
        className={albertSans.className + ' bg-background'} >
          {children}
      </body>
    </html>
  );
}
