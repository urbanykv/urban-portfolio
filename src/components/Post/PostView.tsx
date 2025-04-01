import { Icon } from "../IconElement/IconView";
import { IPostView } from "./PostModel";

export const PostView = ({ typePost, title, date, description }: IPostView) => {
    return(
        <section className="bg-primary-300 w-[100%]">
            {
                typePost === "project" ? 
                    <>
                        {/* Aqui ficará os sliders */}
                        <section>
                            <section>
                                <h1>{title}</h1>
                                <p> • {date}</p>
                            </section>
                            <p>{description}</p>
                        </section>
                    </> 
                : typePost === "experience" ?
                    <>
                        
                    </> 
                : typePost === "skill" ?
                    <section>
                        <Icon icon={""} width={""} height={""} />
                        <section>
                            <section>
                                <h1>{title}</h1>
                                <p> • {date}</p>
                            </section>
                            <p>{description}</p>
                        </section>
                    </section> 
                : null 
            }
        </section>
    );
};