import { ResumeView } from "../../components/Resume/ResumeView";
import { TimeLineView } from "../../components/TimeLine/TimeLineView";

export const HomeView = () => {
    return(
        <section className="h-[100%] w-[100%] flex gap-3 items-center justify-center">
            <ResumeView/>
            <TimeLineView Posts={[]} />
        </section>
    );
};