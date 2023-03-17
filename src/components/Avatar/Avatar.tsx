import style from "./Avatar.module.scss";

type AvatarProps = {
    animal: string
    name: string
}

const Avatar = ({animal, name}: AvatarProps) => {
    return (
        <>
            <img src={animal} alt={name} />
            <p>
                <span className={style.label}>Name:</span> {name}
            </p>
            <p>
                <span className={style.label}>Instrument:</span> Guitar
            </p>
        </>
    );
};

export default Avatar;
