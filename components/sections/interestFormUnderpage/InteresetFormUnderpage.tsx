import Form from "./Form";
import { Project } from "../ourProjects/data";
import ContactDetails from "@/components/ui/contactDetails/ContactDetails";

interface InterestFormUnderpageProps {
    project: Project;
}

export default function InterestFormUnderpage({ project }: InterestFormUnderpageProps) {
    return (
        <section className="section-surface2 base-x-p base-y-p grid grid-cols-12">
            <div className="col-span-6 flex flex-col justify-between">
                <div>
                    <p className="text-display text-text">Intresseanmälan</p>
                    <p className="text-display text-text">{project.title} väntar</p>
                </div>
                <div>
                    <ContactDetails />
                </div>
            </div>
            <div className="col-span-6">
                <Form />
            </div>
        </section>
    );
}
