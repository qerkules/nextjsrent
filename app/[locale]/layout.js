import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rent a cars In Baku",
  description: "The best price perfomant rent a car in Baku",
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="../favicon.ico" sizes="any" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16524695155"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'AW-16524695155');
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}
