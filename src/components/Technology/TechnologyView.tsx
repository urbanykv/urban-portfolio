import { Icon } from "../IconElement/IconView";
import { TECHNOLOGIES } from "./TechnologyModel";


export const TechnologieView = ({ TECH_ID, TECH_NAME, TECH_ICON }: TECHNOLOGIES) => {
    return(
            <section key={TECH_ID} className="p-2 rounded-lg transition-all hover:bg-primary-300 w-[40px] h-[40px] flex justify-center items-center relative group">
            <section className={`hidden group absolute text-sm bg-black text-white p-1 rounded-[3px] top-[-35px] transition-all group-hover:block`}>{TECH_NAME}</section>
                <Icon
                    icon={TECH_ICON}
                    width="80%"
                    height="80%"
                />
            </section>
    );
};