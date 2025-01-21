import { Button } from "@/components/ui/button";
import { NavbarMenu } from "./NavbarMenu";



function Navbar() {
  return (
    <header className=" bg-neutral-900 text-white">
      <div className="container flex h-14 items-center justify-between py-9">
        <nav className="flex gap-6 lg:grid-cols-3 bg-neutral-900">
          <a href="#" className="text-lg font-semibold ml-10 ">
            Logo
          </a>
        </nav>
        <NavbarMenu />
        <Button variant="outline">Sign In</Button>
      </div>
    </header>
  );
}

export default Navbar;
