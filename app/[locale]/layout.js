import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rent a cars In Baku",
  description: "The best price performant rental cars in Baku",
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
