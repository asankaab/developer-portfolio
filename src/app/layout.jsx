import { Bricolage_Grotesque } from "next/font/google"
import "./main.css"

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap'
})

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
        className={bricolageGrotesque.className + ' bg-background'} >
          {children}
      </body>
    </html>
  );
}
