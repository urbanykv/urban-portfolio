export interface IInputView {
    id: string,
    label: string,
    placeholder: string,
    isInput: 'input' | 'textarea',
    value: string,
    type?: 'text',
    width?: string,
    height?: string,
    onChange: () => void,
}