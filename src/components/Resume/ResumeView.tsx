import { ButtonView } from "../Button/ButtonView";
import { UserCardView } from "../UserCard/UserCardView";
import profilePicture from "../../assets/Icons/matheusimage.jpg";
import { useResumeViewModel } from "./ResumeViewModel";
import { ExpListView } from "../ExpList/ExpListView";
import { TimeLineView } from "../TimeLine/TimeLineView";
import { SkillsContainerView } from "../SkillsContainer/SkillsContainerView";

export const ResumeView = () => {
    const { resumeState, toggleResumeState } = useResumeViewModel();

    return(
        <section className="flex flex-col gap-2 h-[100%] w-[100%] min-w-[335px] max-w-[370px]">
            <UserCardView 
                fullName={"Matheus Urban"} 
                username={"@urbanykv"} 
                profilePicture={profilePicture} 
                lastestEnterprise={"Metalsa"} 
                lastestPosition={"Desenvolvedor de Software"} 
                graduation={"Engenharia de Software"} 
                address={"Osasco, São Paulo"} 
                linkedin={"#"}
            />
            <nav className="flex justify-center items-center gap-2">
                <ButtonView 
                    styleType={resumeState == 'timeline' ? 'primary' : 'secondary'}  
                    isAnchor="button" 
                    label="TimeLine"
                    onClick={() => toggleResumeState('timeline')}
                    width="100%"
                    height="40px"
                />
                <hr className="h-[75%] w-[1px] bg-secondary-100"/>
                <ButtonView 
                    styleType={resumeState == 'experience' ? 'primary' : 'secondary'} 
                    isAnchor="button" 
                    label="Experiências"
                    onClick={() => toggleResumeState("experience")}
                    width="100%"
                    height="40px"
                />
                <hr className="h-[75%] w-[1px] bg-secondary-100"/>
                <ButtonView 
                    styleType={resumeState == 'skills' ? 'primary' : 'secondary'} 
                    isAnchor="button" 
                    label="Habilidades"
                    onClick={() => toggleResumeState("skills")}
                    width="100%"
                    height="40px"
                />
            </nav>
            {
                resumeState == 'experience' ?
                    <ExpListView ExpList={[]}/>
                : resumeState == 'timeline' ? 
                    <TimeLineView Posts={[]} />
                : resumeState == 'skills' ? 
                    <SkillsContainerView />
                : null
            }
        </section>
    );
}