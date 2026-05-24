import logo from "@/public/logo/logo_green.png";
import Image from "next/image";
import { menu } from "./menu";
import Link from "next/link";
import Hamburger from "../hamburger/Hamburger";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header className="fixed w-full base-x-p py-sm z-100 section-surface" role="banner">
            <div className="flex flex-row justify-between items-center">
                <Link href="/" aria-label="Lewa Bostad - Till startsidan">
                    <Image
                        src={logo}
                        alt="The logo for the company lewa bostad"
                        className="h-7 md:h-11 w-auto"
                        priority
                    />
                </Link>

                <nav
                    className="hidden md:flex  flex-row gap-3xl text-body"
                    aria-label="Huvudnavigation"
                >
                    {menu.map((item, index) => (
                        <Link key={index} href={item.href} className="link-hover-fade">
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="md:hidden">
                    <Hamburger>
                        <MobileMenu />
                    </Hamburger>
                </div>
            </div>
        </header>
    );
}
