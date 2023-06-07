import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sukkart",
  description: "The No.1 Ecommerce store in Nsukka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} px-4`}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
