import { InputHTMLAttributes } from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const CheckBox: React.FC<props> = (props) => {
    return (
        <div className="my-1 cursor-pointer">
            <input type="checkbox" {...props} className="mr-2" />
            <label className="cursor-pointer" htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
};
