import style from "./Button.module.scss";

type ButtonProps = {
    text: string
    disabled: boolean
}

const Button = ({ text, disabled }: ButtonProps) => {
    return (
        <button className={style.button62} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
