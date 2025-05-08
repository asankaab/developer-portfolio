import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./main.css"

export const metadata = {
  title: "Asanka | Web Developer",
  description: "asanka abewickrama web developer, ui/ux designer and graphic designer",
};

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body className={bricolageGrotesque.className + ' bg-background'}>
            {children}
            <Analytics/>
          </body>
    </html>
  );
}
