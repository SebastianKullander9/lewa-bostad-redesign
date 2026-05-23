import Image from "next/image";
import contactImage from "@/public/contact/contact.webp";
import ContactDetails from "@/components/ui/contactDetails/ContactDetails";

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
                        <ContactDetails />
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
