import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rent a cars In Baku",
  description: "The best price performant rental cars in Baku",
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <Script id="metrika-counter" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
          ym(97137271, "init", {
                defer: true,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
          });`}
      </Script>
      <body>{children}</body>
    </html>
  );
}
