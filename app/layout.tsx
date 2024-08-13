import { getSiteInfo } from "@/actions/sanityQueries";
import "./globals.css";
import { inter, montserrat } from "./lib/fonts";
import { fallbackSiteInfo } from "./lib/fallbackData";

export const generateMetadata = async () => {
  const siteInfo = await getSiteInfo()

  return {
    title: siteInfo.title || fallbackSiteInfo.title,
    description: siteInfo.description || fallbackSiteInfo.description,
    openGraph: {
      title: siteInfo.title || fallbackSiteInfo.title,
      description: siteInfo.description || fallbackSiteInfo.description,
      images: [{
        url: siteInfo.image.url || fallbackSiteInfo.openGraph.image.url,
        width: 1200,
        height: 630,
        alt: siteInfo?.title || fallbackSiteInfo.title,
      }]
    },
    icons: {
      icon: siteInfo.icon,
      apple: siteInfo.icon,

    },
    twitter: {
      card: "summary_large_image",
      title: siteInfo.title || fallbackSiteInfo.title,
      description: siteInfo.description || fallbackSiteInfo.description,
      image: siteInfo.image.url || fallbackSiteInfo.openGraph.image.url
    }
  }
}

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {

  return (
    <html lang="en" className={`bg-primary ${montserrat.variable} ${inter.variable}`}>
      <body id="root">
        {children}
        {modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
