import { Icon } from "../IconElement/IconView";
import { IExpCardView } from "./ExpCardModel";

export const ExpCardView = ({ icon, position, company, contract, location, startDate, endDate, technologies }: IExpCardView) => {
    return (
        <section className="text-white border-1 px-4 w-[100%] min-w-[335px] max-w-[370px] py-5 rounded-lg border-secondary-100 bg-primary-200 flex flex-col gap-1">
            <section className="flex items-center justify-start gap-2">
                <Icon icon={icon} width="30px" height="30px" radius="rounded-full" />
                <h1 className="text-xl font-semibold">{company}</h1>
            </section>
            <section className="flex flex-col items-start gap-1">
                <h2 className="text-base font-medium">{position}</h2>
                <p className="text-xs font-light">{contract}, {location}</p>
                <p className="text-xs font-light">{startDate} - {endDate}</p>
            </section>
            <ul>
                {
                    technologies.map((tech,  index) => (
                        <li key={index}>
                            <Icon icon={""} width={""} height={""} />
                            <p>{tech}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}