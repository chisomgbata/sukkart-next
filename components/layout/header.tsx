import Logo from "@/components/icons/logo";
import Link from "next/link";
import Cart from "@/components/cart";
import { Suspense } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import MobileMenu from "@/components/layout/mobileMenu";
import SearchBar from "@/components/search/bar";
import Loading from "@/components/layout/loading";
import DesktopSearchBar from "@/components/search/desktopBar";

const navigation = [
  { name: "Company", href: "#" },
  { name: "Stores", href: "#" },
];

export default function Header() {
  return (
    <header className="bg-white top-0 sticky shadow-sm shadow-orange-200 py-1 lg:py-4 ">
      <nav aria-label="Top" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 ">
        <div className=" ">
          <div className=" flex items-center">
            <MobileMenu navigation={navigation} />
            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <div className="h-full  space-x-8 hidden lg:flex ml-10">
              {navigation.map((page) => (
                <a
                  key={page.name}
                  href={page.href}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  {page.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:block w-full mx-10">
              <DesktopSearchBar />
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <Suspense fallback={<Loading />}>
                  <Cart />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Search bar */}
      <div className="lg:hidden">
        <SearchBar />
      </div>
    </header>
  );
}
