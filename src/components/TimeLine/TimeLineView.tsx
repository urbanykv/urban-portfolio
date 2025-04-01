import { ContactCardView } from "../ContactCard/ContactCardView";
import { PostView } from "../Post/PostView";
import { ITimeLineView } from "./TimeLineModel";

export const TimeLineView = ({ Posts }: ITimeLineView) => {
    return(
        <section className="w-[100%] h-[100%] text-white border-1 p-5 rounded-lg border-secondary-100 bg-primary-200 flex flex-col gap-3">
            <h1 className="font-medium text-lg">TimeLine</h1>
            <section className="w-[100%] h-[100%] flex flex-col justify-around items-center gap-2.5 overflow-y-scroll">
                {
                    Posts.map( post => (
                        <PostView typePost={post.typePost} title={""} date={""} description={""} />
                    ))
                }
            </section>
            <ContactCardView />
        </section>
    );
}