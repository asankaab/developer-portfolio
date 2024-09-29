import "./app.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Asanka | Web Developer",
  description: "asanker.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
      </body>
    </html>
  );
}
