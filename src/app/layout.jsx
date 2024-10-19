import { Bricolage_Grotesque } from "next/font/google"
import "./main.css"

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={bricolageGrotesque.className + ' bg-background'} >
          {children}
      </body>
    </html>
  );
}
