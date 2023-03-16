import style from "./Avatar.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import tiger from "../../assets/tiger.png";
import sheep from "../../assets/vecteezy_sheep-playing-music-cute-animal-play-flute-music-instrument_11235418_893.png";
import hedgehog from "../../assets/ezitis.png";

const AvatarForm = () => {
    const [name, setName] = useState("");
    const [selectedAvatar, setSelectedAvatar] = useState("tiger");

    const handleAvatarClick = (avatar: string) => {
        setSelectedAvatar(avatar);
    };

    const isNameValid = name.trim() !== "";

    return (
        <>
            <div className={style.title}>
                <h1>Musical adventure</h1>
            </div>
            <div className={style.explanation}>
                <p>
                    In order to begin your musical adventure, you will need to write your name and select your
                    avatar
                </p>
            </div>
            <div className={style.wrapper}>
                <form className={style.avatarForm}>
                    <label className={style.formLabel}>
                        Your name:
                        <input className={style.nameInput} type="text" value={name} onChange={(e) => {setName(e.target.value);}} />
                    </label>  
                    <div className={style.avatars}>
                        <div className={`${style.avatar} ${selectedAvatar === "tiger" ? style.selected : ""}`} onClick={() => handleAvatarClick("tiger")}>
                            <img className={style.image} src={tiger} alt={name} />
                            <p>
                                <span className={style.label}>Name:</span> {name}
                            </p>
                            <p>
                                <span className={style.label}>Instrument:</span> Guitar
                            </p>
                        </div>
                        <div className={`${style.avatar} ${selectedAvatar === "sheep" ? style.selected : ""}`} onClick={() => handleAvatarClick("sheep")}>
                            <img src={sheep} alt={name} />
                            <p>
                                <span className={style.label}>Name:</span> {name}
                            </p>
                            <p>
                                <span className={style.label}>Instrument:</span> Flute
                            </p>
                        </div>
                        <div className={`${style.avatar} ${selectedAvatar === "hedgehog" ? style.selected : ""}`} onClick={() => handleAvatarClick("hedgehog")}>
                            <img src={hedgehog} alt={name} />
                            <p>
                                <span className={style.label}>Name:</span> {name}
                            </p>
                            <p>
                                <span className={style.label}>Instrument:</span> Triangle
                            </p>
                        </div>
                    </div>
                    <div className={style.btnWrapper}>
                        {isNameValid ? (
                            <Link to={`/gin/${name}/${selectedAvatar}`} style={{ textDecoration: "none" }}>
                                <button className={style.button62}>
                                    Save my avatar
                                </button>
                            </Link>
                        ) : (
                            <button className={style.button62} disabled>
                                Save my avatar
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default AvatarForm;