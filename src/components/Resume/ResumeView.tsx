import { ButtonView } from "../Button/ButtonView";
import { UserCardView } from "../UserCard/UserCardView";
import profilePicture from "../../assets/Icons/matheusimage.jpg";
import { ExpListView } from "../ExpList/ExpListView";

export const ResumeView = () => {
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
                    styleType="primary"  
                    isAnchor="button" 
                    label="Experiências"
                    onClick={() => console.log("Experiências")}
                    width="100%"
                    height="45px"
                />
                <hr className="h-[75%] w-[1px] bg-secondary-100"/>
                <ButtonView 
                    styleType="secondary"  
                    isAnchor="button" 
                    label="Habilidades"
                    onClick={() => console.log("Experiências")}
                    width="100%"
                    height="45px"
                />
            </nav>
            <ExpListView 
                ExpList={[
                    {
                        company: "Metalsa",
                        contract: "Estagiário",
                        endDate: "até o momento",
                        startDate: "03/24",
                        icon: profilePicture,
                        position: "Desenvolvedor de Software",
                        location: "Osasco - SP",
                        technologies: []
                    } 
                ]} 
            />
        </section>
    );
}