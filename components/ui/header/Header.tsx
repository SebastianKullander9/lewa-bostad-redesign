import logo from "@/public/logo/logo_green.png";
import Image from "next/image";
import { menu } from "./menu";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed w-full base-x-p py-sm z-100 section-surface-1" role="banner">
            <div className="flex flex-row justify-between items-center">
                <Link href="/" aria-label="Lewa Bostad - Till startsidan">
                    <Image
                        src={logo}
                        alt="The logo for the company lewa bostad"
                        width={100}
                        height={100}
                        priority
                    />
                </Link>

                <nav className="flex flex-row gap-3xl text-body" aria-label="Huvudnavigation">
                    {menu.map((item, index) => (
                        <Link key={index} href={item.href}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
