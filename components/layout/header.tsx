import MobileMenu from "@/components/headers/mobileMenu";
import Logo from "@/components/icons/logo";
export default function Header() {
  return (
    <>
      <header
        className="flex border-b py-3 justify-between items-center
      "
      >
        <MobileMenu />
        <Logo />
      </header>
    </>
  );
}
