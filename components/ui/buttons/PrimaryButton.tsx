interface PrimaryButtonProps {
    label: string;
    type: "submit" | "reset" | "button" | undefined;
}

export default function PrimaryButton({ label, type }: PrimaryButtonProps) {
    return (
        <button
            type={type}
            className="w-full border px-md py-sm uppercase text-small cursor-pointer group"
        >
            <span className="group-hover:underline underline-offset-2">{label}</span>
        </button>
    );
}
