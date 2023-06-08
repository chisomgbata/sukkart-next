import "./globals.css";
import { Comfortaa } from "next/font/google";
import Header from "@/components/layout/header";
import { ClerkProvider } from "@clerk/nextjs";

const comfortaa = Comfortaa({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

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
    <html lang="en">
      <ClerkProvider>
        <body className={`${comfortaa.className}`}>
          <Header />
          <main className="p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
