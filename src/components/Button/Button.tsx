import style from "./Button.module.scss";

type ButtonProps = {
    text: string
    disabled: boolean
    onClick?: () => void;
}

const Button = ({ text, disabled, onClick }: ButtonProps) => {
    return (
        <button 
            className={style.button62} 
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
