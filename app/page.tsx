import Hero from "@/components/sections/hero/page";
import Intro from "@/components/sections/intro/Intro";
import ProjectCTA from "@/components/sections/projectCTA/ProjectCTA";
import AboutCTA from "@/components/sections/aboutCTA/AboutCTA";
import KeyFigures from "@/components/sections/keyfigures/Keyfigures";

export default function Home() {
    return (
        <>
            <Hero />
            <Intro />
            <ProjectCTA />
            <AboutCTA />
            <KeyFigures />
        </>
    );
}
