import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rent a cars In Baku",
  description: "The best price performant rental cars in Baku",
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <GoogleAnalytics gaId="G-61MC0JMJPC" />
      <body>{children}</body>
    </html>
  );
}
