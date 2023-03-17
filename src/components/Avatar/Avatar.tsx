import style from "./Avatar.module.scss";

type AvatarProps = {
    animal: string
    name: string
    text: string
}

const Avatar = ({animal, name, text}: AvatarProps) => {
    return (
        <>
            <img src={animal} alt={name} />
            <span>
                Name: <span className={style.text}>{name}</span>
            </span>
            <p>
                Instrument: {text}
            </p>
        </>
    );
};

export default Avatar;
