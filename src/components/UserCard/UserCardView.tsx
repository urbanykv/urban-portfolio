import { ButtonView } from "../Button/ButtonView";
import { Icon } from "../IconElement/IconView";
import { IUserCardView } from "./UserCardModel";
import linkedIn from "../../assets/Icons/linkedin-icon.png";
import work from "../../assets/Icons/work.png";
import study from "../../assets/Icons/book.png";

export const UserCardView = ({ username, fullName, profilePicture, address, graduation, lastestEnterprise, lastestPosition}: IUserCardView) => {
    return(
        <section className="text-white border-1 px-4 w-[100%] min-w-[335px] max-w-[370px] py-5 rounded-lg border-secondary-100 bg-primary-200 flex flex-col gap-1">
            <section className="flex items-center gap-4 mb-4">
                <Icon icon={profilePicture} width="90px" height="90px" radius="rounded-full" border="border-1" colorBorder="border-secondary-100" />
                <section>
                    <h1 className="text-2xl">{fullName}</h1>
                    <h2 className="text-[15px] italic">{lastestPosition}</h2>
                    <p className="text-xs">{address}</p>
                </section>
            </section>
            <nav className="flex items-start justify-center flex-col gap-1">
                <ButtonView 
                    styleType={"link"} 
                    isAnchor="anchor" 
                    iconPosition={"left"}
                    href=""
                    icon={work}
                    label={lastestEnterprise}
                />
                <ButtonView 
                    styleType={"link"} 
                    isAnchor="anchor" 
                    iconPosition={"left"}
                    href=""
                    icon={study}
                    label={graduation}
                />
                <ButtonView 
                    styleType={"link"} 
                    isAnchor="anchor" 
                    iconPosition={"left"}
                    href=""
                    icon={linkedIn}
                    label={username}
                />
            </nav>
        </section>
    );
};