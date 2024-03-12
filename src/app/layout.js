import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enspire 24",
  description: "Ecell-DMCE Flagship event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content="Enspire - Flagship Event" />
        <meta name="description" content="Enspire is the flagship event of Ecell DMCE (Entrepreurship Cell - Datta Meghe College of Engineering)" />

        <meta name="google-site-verification" content="60_7SYi3TgmDiIlLJX2kG8Yb3Z3WhnSe-S42aI1qhSM" />
      </head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
