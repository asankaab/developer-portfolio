import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./app.css";

export const metadata = {
  title: "Asanka | Web Developer",
  description: "asanker.com",
};

export default function Layout({ children }) {
  return (
      <>
        <Header />
          {children}
        <Footer/>
      </>
  );
}
