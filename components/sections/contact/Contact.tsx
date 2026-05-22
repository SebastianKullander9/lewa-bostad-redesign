import Image from "next/image";
import contactImage from "@/public/contact/contact.webp";

export default function Contact() {
    return (
        <section className="section-surface" aria-label="Kontakta Lewa Bostad">
            <div className="grid grid-cols-12 base-x-p base-y-p">
                <div className="col-span-12">
                    <p className="text-small">Kontakt</p>
                    <h2 className="text-display">
                        Din bostadsresa börjar här.
                        <br />
                        Med ett hej.
                    </h2>
                </div>
                <div className="col-span-6 flex items-center relative grid-grid-cols-4">
                    <p className="text-lead">
                        Varmt välkommen att kontakta oss, så hjälper vi dig vidare.
                    </p>
                    <div className="absolute bottom-0 left-0">
                        <div className="flex flex-row items-center">
                            <p className="text-small min-w-30">Email</p>
                            <a
                                href="mailto:xxxx@lewabostad.se"
                                className="text-lead hover:opacity-60 transition-opacity"
                            >
                                xxxx@lewabostad.se
                            </a>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-small min-w-30">Telefon</p>
                            <a
                                href="tel:0800000"
                                className="text-lead hover:opacity-60 transition-opacity"
                            >
                                08-XXX XX XX
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 relative">
                    <Image
                        src={contactImage}
                        alt="Vardagsrum från ett av lewas projekt"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
