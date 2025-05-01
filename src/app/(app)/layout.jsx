import Footer from "@/components/Footer";
import "./app.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import Cursor from "@/components/Cursor";

export default function Layout({ children }) {
  return (
      <>
        <Cursor/>
        <HeaderWrapper />
          {children}
        <Footer/>
      </>
  );
}
