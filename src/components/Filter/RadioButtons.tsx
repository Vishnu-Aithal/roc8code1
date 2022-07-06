import { InputHTMLAttributes } from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const RadioButton: React.FC<props> = (props) => {
    return (
        <div className="my-1">
            <input type="radio" name={props.name} {...props} className="mr-2" />
            <label className="cursor-pointer" htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
};
