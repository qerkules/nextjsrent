import Homepage from "../pages/homepage/Homepage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main>
      <Navbar />
      <Homepage />
      <Footer />
    </main>
  );
}
