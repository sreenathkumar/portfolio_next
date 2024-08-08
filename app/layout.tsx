import "./globals.css";
import { inter, montserrat } from "./lib/fonts";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-primary ${montserrat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
