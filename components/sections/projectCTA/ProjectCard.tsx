import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProjectCardProps {
    title: string;
    location: string;
    status: string;
    image: StaticImageData;
}

export default function ProjectCard({ title, location, status, image }: ProjectCardProps) {
    return (
        <article className="flex flex-col gap-sm">
            <Image
                src={image}
                alt={`Lewa Bostads projekt ${title} i ${location}`}
                className="object-cover"
            />
            <div>
                <p className="text-lead text-text">{title}</p>
                <p className="text-small text-text-muted">{location}</p>
                <p className="text-small text-text-muted">{status}</p>
            </div>
        </article>
    );
}
