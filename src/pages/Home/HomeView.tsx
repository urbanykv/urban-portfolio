import { ResumeView } from "../../components/Resume/ResumeView";

export const HomeView = () => {
    return(
        <section className="h-[100%] w-[100%] flex gap-2 items-center justify-between">
            <ResumeView/>
        </section>
    );
};