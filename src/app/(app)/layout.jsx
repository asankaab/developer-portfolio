import Footer from "@/components/Footer";
import "./app.css";
import { Bricolage_Grotesque } from "next/font/google";
import HeaderWrapper from "@/components/HeaderWrapper";

export const metadata = {
  title: "Asanka | Web Developer",
  description: "asanker.com",
};

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap'
})

export default function Layout({ children }) {
  return (
      <body className={bricolageGrotesque.className + ' bg-background'}>
        <HeaderWrapper />
          {children}
        <Footer/>
      </body>
  );
}
