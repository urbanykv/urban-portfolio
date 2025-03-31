export interface IButtonView {
    styleType: 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'link';
    isAnchor?: 'button' | 'anchor';
    iconPosition?: 'left' | 'right';
    width?: string;
    height?: string;
    label?: string;
    icon?: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
}

export interface IButtonViewModel {
    styleType: 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'link';
    iconPosition?: 'left' | 'right';
    width?: string;
    height?: string;
}