import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metaInfo = {
  title: "Github Website of Hikaru",
  description: "Github Website of Hikaru",
  url: "https://my12parsecs.github.io/",
  image: "https://drscdn.500px.org/photo/1081066081/q%3D80_m%3D1500/v2?sig=a252e8aef70ce8d2611ef23590db4e6122f566505ba6fe27bac6587411b4c7e3"
};

export const metadata = {
  title: metaInfo.title,
  description: metaInfo.description,
  keywords: ["website"],
  openGraph: {
    title: metaInfo.title,
    description: metaInfo.description,
    url: metaInfo.url,
    images: [
      {
        url: metaInfo.image,
        width: 500,
        height: 500,
        alt: '',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: metaInfo.title,
    description: metaInfo.description,
    images: [metaInfo.image],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
