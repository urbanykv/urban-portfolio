import { IButtonViewModel } from "./ButtonModel";

export const useButtonViewModel = ({ styleType, iconPosition }: IButtonViewModel) => {
    const buttonStyle = {
        primary: `border-1 bg-white text-black hover:bg-gray-200 border-secondary-200 font-medium`,
        secondary: `border-1 bg-primary-200 text-white hover:bg-primary-100  border-secondary-100 font-medium`,
        tertiary: `bg-primary-400 text-white hover:bg-primary-100 font-medium`,
        disabled: `border-1 bg-gray-300 text-gray-500 cursor-not-allowed`,
        link: 'text-white hover:text-gray-200 font-regular text-sm',
    };

    const processedStyle = styleType === "primary"? buttonStyle.primary:
    styleType === "secondary"? buttonStyle.secondary:
    styleType === "tertiary"? buttonStyle.tertiary:
    styleType === "disabled"? buttonStyle.disabled:
    styleType === "link"? buttonStyle.link: null;

    const processedClassName = `${iconPosition === 'left' ? 'flex-row-reverse' : 'flex-row'} flex items-center ${styleType === "link" ? 'justify-end' : 'justify-center'} gap-2 cursor-pointer rounded-lg transition-all  ${processedStyle}`;
    
    return {
        processedClassName
    };
}