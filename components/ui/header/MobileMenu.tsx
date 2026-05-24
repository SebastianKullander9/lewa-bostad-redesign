import { menu } from "./menu";
import Link from "next/link";

export default function MobileMenu() {
    return (
        <div className="">
            <nav>
                {menu.map((item) => (
                    <Link key={item.href} href={item.href}>
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
