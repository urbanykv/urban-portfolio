import { ExpCardView } from "../ExpCard/ExpCardView";
import { IExpListView } from "./ExpListModel";

export const ExpListView = ({ ExpList }: IExpListView) => {
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