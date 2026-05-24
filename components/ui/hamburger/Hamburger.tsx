"use client";

import { useState } from "react";
import React from "react";

interface HeaderProps {
    children: React.ReactNode;
}

export default function Hamburger({ children }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={handleOpen} type="button" className="flex flex-col gap-1">
                <span className="w-5.5 h-0.5 bg-primary" />
                <span className="w-5.5 h-0.5 bg-primary" />
                <span className="w-5.5 h-0.5 bg-primary" />
            </button>

            <div
                className={`fixed z-9999 inset-0 bg-surface ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                {children}
            </div>
        </>
    );
}
