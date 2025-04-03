import { SkillView } from "../Skill/SkillView";
import { ISkillsListView } from "./SkillsModel";



export const SkillsListView = ({ SkillList }: ISkillsListView) => {
    return(
        <ul className="flex flex-wrap justify-start items-start gap-2.5 w-[100%]">
            {
                SkillList.map( (SkillCard , index) => 
                    <SkillView 
                        key={index}
                        name={SkillCard.name}
                    />
                )
            }
        </ul>
    );
};