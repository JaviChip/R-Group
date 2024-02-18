/* eslint-disable new-cap */
/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
import { Lora } from "next/font/google";
// eslint-disable-next-line camelcase
import { Libre_Bodoni } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });
const libre = Libre_Bodoni({ subsets: ["latin"] });

export const metadata = {
  title: "R-Group",
  description: "R-Group Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${libre.variable}`}>
        <Navigation />
        <div className="w-full flex flex-col bg-rgb(100,20,30) items-center justify-center">
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
