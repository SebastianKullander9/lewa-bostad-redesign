import { projectData } from "../data";
import ProjectThumbnail from "./ProjectThumbnail";

export default function ProjectsPage() {
    return (
        <section className="section-surface min-h-section mt-(--header-height) base-x-p py-4xl grid grid-cols-12 gap-xl">
            <div className="col-span-12 flex flex-col gap-md">
                <h2 className="text-display">Hitta hem hos oss.</h2>
                <p className="text-lead max-w-prose">
                    Lewa Bostad bygger radhus och parhus i bostadsrättsform. Husen utformas med
                    fokus på hållbar arkitektur, genomtänkt design och hög kvalitet i varje detalj.
                </p>
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-3xl">
                {projectData.map((project, index) => (
                    <ProjectThumbnail
                        key={project.slug}
                        project={project}
                        index={index}
                    ></ProjectThumbnail>
                ))}
            </div>
        </section>
    );
}
