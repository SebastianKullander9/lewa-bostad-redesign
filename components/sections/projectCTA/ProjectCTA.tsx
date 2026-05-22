import ProjectCard from "./ProjectCard";
import { projectCTAData } from "./data";

/*
TODO: 
- Add link to article
- Add hover effects to article
- Handle images correcly (fill, sizes) etc
- WCAG for links
*/

export default function ProjectCTA() {
    return (
        <section className="section-surface2 w-full text-text">
            <div className="base-x-p py-3xl w-full grid grid-cols-12 gap-xs">
                <div className="col-span-12">
                    <h2 className="text-h2 mb-2xl">Våra projekt</h2>
                </div>
                {projectCTAData.map((item, index) => (
                    <div key={index} className="col-span-6 relative">
                        <ProjectCard
                            title={item.title}
                            location={item.location}
                            status={item.status}
                            image={item.image}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
