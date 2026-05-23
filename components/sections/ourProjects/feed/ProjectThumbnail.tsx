import { Project } from "../data";
import Image from "next/image";
import Link from "next/link";

interface ProjectThumbnailProps {
    project: Project;
    index: number;
}

export default function ProjectThumbnail({ project, index }: ProjectThumbnailProps) {
    return (
        <Link href={`/vara-projekt/${project.slug}`} className="col-span-6 cursor-default">
            <article>
                <div className="relative aspect-3/2 overflow-hidden flex">
                    <Image
                        src={project.images.thumbnail.src}
                        className="object-cover"
                        fill
                        priority={index < 2}
                        alt={project.images.thumbnail.alt}
                    />
                </div>
                <div className="mt-sm">
                    <p className="text-lead text-text">{project.title}</p>
                    <p className="text-body text-text-muted">{project.location}</p>
                    <p className="text-body text-text-muted">{project.status}</p>
                </div>
            </article>
        </Link>
    );
}
