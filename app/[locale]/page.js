import Homepage from "../pages/homepage/Homepage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useTranslations } from "next-intl";
import Head from "next/head";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main>
      <Head>
      </Head>

      <Navbar />
      <Homepage />
      <Footer />
    </main>
  );
}
