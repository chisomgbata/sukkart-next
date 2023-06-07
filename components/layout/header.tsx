import MobileMenu from "@/components/headers/mobileMenu";
import { SignedIn, SignIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <header
        className="flex border-b py-3 justify-between items-center
      "
      >
        <MobileMenu />
        <Image
          src="/sukkart.svg"
          alt="Sukkart "
          width={100}
          height={40}
          className="w-auto h-10"
        />
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </>
  );
}