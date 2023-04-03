import { Nunito_Sans } from "next/font/google";
import Toggle from "@/components/Toggle";
import "../global.css";

export const metadata = {
  title: "Country App",
  description: "app of countries",
};

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

interface layoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: layoutProps) {
  return (
    <html lang="en" className={nunito_sans.className}>
      <body className="dark:bg-gray-700">
        <header className="py-4 shadow-md mb-1 ">
          <div className="container flex justify-between items-center text-gray-800 dark:text-gray-200">
            <h1>Where in the World?</h1>
            <Toggle></Toggle>
          </div>
        </header>
        <main className="bg-gray-100 dark:bg-gray-800 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
