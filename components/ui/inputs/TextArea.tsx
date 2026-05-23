import { cn } from "@/app/lib/utils";

interface TextBoxProps {
    label: string;
    name: string;
}

export default function TextArea({ label, name }: TextBoxProps) {
    return (
        <div
            className={cn(
                "border-b border-primary/20 group",
                "focus-within:border-black transition-colors duration-200",
            )}
        >
            <label
                className={cn(
                    "py-sm text-text-muted",
                    "group-focus-within:text-text transition-colors duration-200",
                )}
                htmlFor={name}
            >
                {label}
            </label>
            <textarea
                className="focus:outline-none focus:text-text w-full"
                name={name}
                id={name}
                rows={5}
            />
        </div>
    );
}

/*
<div
    className={cn(
        "relative border-b border-primary/20 group",
        "focus-within:border-black transition-colors duration-200",
    )}
>
    <label
        htmlFor={name}
        className={cn(
            "absolute py-sm text-text-muted",
            "group-focus-within:text-text transition-colors duration-200",
        )}
    >
        {label}
    </label>
    <input
        type={type}
        name={name}
        id={name}
        className={cn(
            "pl-30 py-sm w-full text-text-muted",
            "focus:outline-none focus:text-text",
        )}
    />
</div>
*/
