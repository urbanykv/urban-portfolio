import { IInputView } from "./InputModel";

export const InputView = ({ label, isInput, placeholder, type, id, width, height}: IInputView) => {
    return(
        <label className="flex flex-col justify-start items-start gap-2.5" htmlFor={id}>
            <p className="text-white font-medium">{label}</p>
            <section className="flex rounded-lg border-1 text-white border-secondary-100 px-3 py-2 bg-primary-200">
                {
                    isInput === 'input' ?
                        <input type={type} id={id} className="focus:outline-0" placeholder={placeholder} />
                    : isInput === 'textarea' ?
                        <textarea id={id} className="focus:outline-0 " style={{minWidth: width, maxWidth: width, minHeight: height, maxHeight: height}} placeholder={placeholder} ></textarea>
                    : null
                }
            </section>
        </label>
    );
}