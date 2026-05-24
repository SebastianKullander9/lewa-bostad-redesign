export default function ContactDetails() {
    return (
        <>
            <div className="flex flex-row items-center">
                <p className="text-small min-w-15 md:min-w-30">Email</p>
                <a
                    href="mailto:xxxx@lewabostad.se"
                    className="text-lead hover:opacity-60 transition-opacity"
                >
                    xxxx@lewabostad.se
                </a>
            </div>
            <div className="flex flex-row items-center">
                <p className="text-small min-w-15 md:min-w-30">Telefon</p>
                <a href="tel:0800000" className="text-lead hover:opacity-60 transition-opacity">
                    08-XXX XX XX
                </a>
            </div>
        </>
    );
}
