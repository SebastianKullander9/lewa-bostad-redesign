import Form from "./Form";

export default function InterestFormGeneral() {
    return (
        <section className="section-surface2 base-x-p base-y-p grid grid-cols-12">
            <div className="col-span-6 flex flex-col justify-between">
                <div>
                    <p className="text-display text-text">Intresseanmälan</p>
                    <p className="text-display text-text">Ditt nästa hem väntar</p>
                </div>

                <p>
                    Vi håller dig uppdaterad om nya projekt, kommande visningar och nyheter från
                    Lewa Bostad.
                </p>
            </div>
            <div className="col-span-6">
                <Form />
            </div>
        </section>
    );
}
