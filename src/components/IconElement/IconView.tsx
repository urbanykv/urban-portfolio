import { IIconView } from "./IconModel";

export const Icon = ({ icon, width, height, border, radius, colorBorder }: IIconView) => {
    const processedClassName = `flex items-center justify-center select-none object-cover ${border !== undefined ? `${border}` : ''} ${radius !== undefined ? `${radius}` : ''} ${colorBorder !== undefined ? `${colorBorder}` : ''}`;
    
    return <img src={icon} className={processedClassName} style={{ width, height }} />;
}