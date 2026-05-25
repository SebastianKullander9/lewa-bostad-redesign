import React from "react";

interface HamburgerProps {
    setState: (isOpen: boolean) => void;
}

export default function Hamburger({ setState }: HamburgerProps) {
    return (
        <>
            <button onClick={() => setState(true)} type="button" className="flex flex-col gap-1">
                <span className="w-5.5 h-0.5 bg-primary" />
                <span className="w-5.5 h-0.5 bg-primary" />
                <span className="w-5.5 h-0.5 bg-primary" />
            </button>
        </>
    );
}
