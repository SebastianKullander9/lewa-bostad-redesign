import Image from "next/image";
import exteriorWood from "@/public/projects/kummelnashojden/Exterior_2_Wood_002.webp";
import { aboutQAData } from "./data";

export default function AboutQA() {
    return (
        <section className="section-surface2 grid grid-cols-12 base-x-p base-y-p">
            <div className="col-span-6 flex flex-col gap-2xl">
                {aboutQAData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-md">
                        <h2 className="text-h3 font-normal text-text">{item.title}</h2>
                        <p className="text-body max-w-prose">{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="col-span-6 relative">
                <Image src={exteriorWood} alt="" className="object-cover" />
            </div>
        </section>
    );
}
