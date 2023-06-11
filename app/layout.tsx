import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/header";
import { ClerkProvider } from "@clerk/nextjs";
import PromoBanner from "@/components/layout/banner";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sukkart",
  description: "The No.1 Ecommerce store in Nsukka",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${poppins.className}`}>
          <PromoBanner />
          <Header />
          <main className="p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
