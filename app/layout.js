import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeaderTop from "@/components/HeaderTop/page";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Modern School",
  description: "Come to learn, leave to serve!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${lato.className}`}>
        <HeaderTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
