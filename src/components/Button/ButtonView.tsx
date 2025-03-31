import { IButtonView } from "./ButtonModel";
import { useButtonViewModel } from "./ButtonViewModel";
import { Icon } from "../IconElement/IconView";

export const ButtonView = ({ styleType, isAnchor, label, icon, iconPosition, width, height, href, onClick, disabled }: IButtonView) => {

    const { processedClassName } = useButtonViewModel({ styleType, iconPosition });

    return(
        <section style={{ width, height }}>
            {
                isAnchor === 'button' ? 
                    <button type="button" style={{ width, height }} className={`${processedClassName}`} onClick={() => onClick && onClick()} disabled={disabled}>
                        {
                            label && <span>{label}</span>
                        }
                        {
                            icon && <Icon 
                                        icon={icon} 
                                        width="20px"
                                        height="20px"
                                    />
                        }
                    </button>
                : isAnchor === 'anchor' ?
                    <a style={{ width, height }} className={`${processedClassName}`} href={href} target="_blank">
                        {
                            label && <span>{label}</span>
                        }
                        {
                            icon && <Icon 
                                        icon={icon} 
                                        width="20px"
                                        height="20px"
                                    />
                        }
                    </a>
                : null
            }
        </section>
    );
}