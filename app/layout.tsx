import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zachari",
  description: "Frontend engineer & indie developer. Building tools for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        {children}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JEHZP08YHV"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JEHZP08YHV');
            `,
          }}
        />
      </body>
    </html>
  );
}