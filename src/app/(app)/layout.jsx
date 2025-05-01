import Footer from "@/components/Footer";
import "./app.css";
import HeaderWrapper from "@/components/HeaderWrapper";

export default function Layout({ children }) {
  return (
      <>
        <HeaderWrapper />
          {children}
        <Footer/>
      </>
  );
}
