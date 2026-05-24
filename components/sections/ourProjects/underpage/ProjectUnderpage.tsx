import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { Project } from "../data";
import Image from "next/image";
import { imageSizes } from "@/app/lib/imageSizes";

interface ProjectUnderpageProps {
    project: Project;
}

export default function ProjectUnderpage({ project }: ProjectUnderpageProps) {
    return (
        <section className="min-h-section mt-(--header-height)">
            <div className="h-[80vh] w-full relative">
                <Image
                    src={project.images.gallery[0].src}
                    className="object-cover"
                    priority
                    sizes={imageSizes.fullWidth}
                    fill
                    alt={project.images.gallery[0].alt}
                />
            </div>
            <div className="base-x-p base-y-p w-full grid grid-cols-12 gap-x-4xl gap-y-5xl">
                <div className="col-span-6">
                    <h2 className="text-display">
                        {project.title},{" "}
                        <span className="italic font-medium">{project.location}</span>
                    </h2>
                </div>
                <div className="col-span-6 flex flex-row items-center justify-between">
                    <div className="flex flex-row items-end">
                        {project.objectInfo.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-xs pr-xl border-r border-text/20 mr-xl last:border-none last:mr-0"
                            >
                                <p className="text-label text-text-muted">{item.title}</p>
                                <p className="text-body">{item.value}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <PrimaryButton label="VISA ALLA BILDER" type="button" />
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="relative aspect-3/2 w-full overflow-hidden">
                        <Image
                            src={project.images.gallery[1].src}
                            alt={project.images.gallery[1].alt}
                            fill
                            sizes={imageSizes.halfWidth}
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="col-span-6">
                    <h3 className="text-h2 font-medium mb-md">{project.textBlocks[0].title}</h3>
                    <p className="mb-xl text-body">{project.textBlocks[0].text}</p>
                    <h3 className="text-h2 font-medium mb-md">{project.textBlocks[1].title}</h3>
                    <p className="mb-xl text-body">{project.textBlocks[1].text}</p>
                </div>
            </div>
        </section>
    );
}
