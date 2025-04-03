import { ISkillView } from "./SkillModel";

export const SkillView = ({ name }: ISkillView) => {
    return(
        <section className="flex justify-center items-center p-2 rounded-lg bg-primary-300">
            <p className="text-sm font-medium text-white">{name}</p>
        </section>
    );
};