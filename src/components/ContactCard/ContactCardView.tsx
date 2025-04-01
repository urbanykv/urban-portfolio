import { ButtonView } from "../Button/ButtonView";
import linkedIn from "../../assets/Icons/linkedin-icon.png";
import gitHub from "../../assets/Icons/github-icon.png";
import whatsApp from "../../assets/Icons/whatsapp-icon.png";


export const ContactCardView = () => {
    return(
        <section className="flex flex-col bg-[linear-gradient(to_right,#FFFFFF_17%,#D8D8D8_30%,#FFFFFF_100%)] h-50 p-4 rounded-2xl justify-between">
            <section className="text-black">
                <h1 className="font-bold">Vamos desenvolver algo juntos!</h1>
                <p className="font-medium">Caso você tenha gostado do que viu e agora está interessado(a) em saber mais sobre mim e meu trabalho, vamos trocar uma ideia.</p>
            </section>
            <nav className="flex gap-2.5 self-end sel">
                <ButtonView 
                    isAnchor="anchor" 
                    styleType={"tertiary"} 
                    icon={linkedIn}
                    width="35px"
                    height="35px"
                />
                <ButtonView 
                    isAnchor="anchor" 
                    styleType={"tertiary"} 
                    icon={gitHub}
                    width="35px"
                    height="35px"
                />
                <ButtonView 
                    isAnchor="anchor" 
                    styleType={"tertiary"} 
                    icon={whatsApp}
                    label="WhatsApp"
                    width="125px"
                    height="35px"
                />
            </nav>
        </section>
    );
};