import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./app.css";
import { Bricolage_Grotesque } from "next/font/google";

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
        <Header />
          {children}
        <Footer/>
      </body>
  );
}
