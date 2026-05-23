// interface FormProps {
//
// }

import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import GdprInput from "@/components/ui/inputs/gdprInput";
import Input from "@/components/ui/inputs/Input";
import TextArea from "@/components/ui/inputs/TextArea";

export default function Form() {
    return (
        <form className="flex flex-col gap-6xl">
            <p className="text-lead">
                Har du frågor om projektet eller vill du boka en visning? Fyll i formuläret nedan så
                återkommer vi så snart som möjligt.
            </p>
            <div className="flex flex-col gap-xl text-lead">
                <Input label="Namn" name="name" />
                <Input label="E-post" name="email" type="email" />
                <Input label="Telefon" name="phone" type="phone" />
                <TextArea label="Medellande" name="message" />
            </div>

            <div className="flex flex-col gap-xl">
                <GdprInput />
                <PrimaryButton type="submit" label="Skicka" />
            </div>
        </form>
    );
}
