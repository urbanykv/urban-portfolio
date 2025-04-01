import { ExpCardView } from "../ExpCard/ExpCardView";
import { ISkillsListView } from "./SkillsModel";


export const SkillsListView = ({ ExpList }: ISkillsListView) => {
    return(
        <ul className="flex flex-col justify-center items-center gap-2.5 w-[100%]">
            {
                ExpList.map( (ExpCard , index) => 
                    <ExpCardView 
                        key={index}
                        icon={ExpCard.icon} 
                        position={ExpCard.position} 
                        company={ExpCard.company} 
                        contract={ExpCard.contract} 
                        location={ExpCard.location} 
                        startDate={ExpCard.startDate} 
                        endDate={ExpCard.endDate} 
                        technologies={ExpCard.technologies}                    
                    />
                )
            }
        </ul>
    );
};