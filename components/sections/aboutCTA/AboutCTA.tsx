import Image from "next/image";
import ctaAbout from "@/public/aboutCTA/aboutCTA.webp";
import Link from "next/link";
import { IconChevronRightFillDuo18 } from "nucleo-ui-fill-duo-18";
import { imageSizes } from "@/app/lib/imageSizes";

export default function AboutCTA() {
    return (
        <section
            className="section-surface base-x-p base-y-p grid grid-cols-12"
            aria-label="Call to action för om oss"
        >
            <div className="col-span-12 relative">
                <p className="text-small absolute top-0 left-0">Om oss</p>
                {/* TODO: Ask client to provide a text they want here, preferably matching length */}
                <h2 className="text-display indent-80 mb-3xl">
                    Vi tror på att ett hem är mer än fyra väggar och ett tak, det är grannen du
                    lånar en kryddmått av, barnen som leker fritt på gården och känslan av att
                    verkligen höra hemma någonstans.
                </h2>
            </div>
            <div className="col-span-6 flex items-center relative">
                <p className="max-w-prose text-lead">
                    Två bostadsaktörer med lång erfarenhet har gått samman och bildat Lewa Bostad.
                    Företaget drivs av Johan Bondebjer och Magnus Ekvall från tidigare Bjerbo Bostad
                    samt Fredrik Lidjan från Reliwe. Med en stark projektportfölj och god finansiell
                    ställning fortsätter vi att skapa hållbara hem och värde för både kunder och
                    samhälle.
                </p>
                <div className="absolute bottom-0 left-0">
                    <Link
                        href="/om-oss"
                        className="text-small flex flex-row items-center gap-xs group"
                    >
                        <span className="group-hover:underline underline-offset-2">
                            LÄR KÄNNA OSS
                        </span>
                        <IconChevronRightFillDuo18 size={12} className="mb-0.5" />
                    </Link>
                </div>
            </div>
            <div className="col-span-6 relative">
                <div className="relative aspect-3/2 w-full overflow-hidden">
                    <Image
                        src={ctaAbout}
                        alt="Kök från projektet Kummelnäshöjden"
                        fill
                        sizes={imageSizes.halfWidth}
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
