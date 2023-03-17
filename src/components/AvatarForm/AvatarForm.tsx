import { useState } from "react";
import { Link } from "react-router-dom";

import style from "./Avatar.module.scss";

import tiger from "../../assets/tiger.png";
import sheep from "../../assets/vecteezy_sheep-playing-music-cute-animal-play-flute-music-instrument_11235418_893.png";
import hedgehog from "../../assets/ezitis.png";

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

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
            <div className={style.paragraph}>
                <p>
                    In order to begin your musical adventure, you will need to write your name and select your
                    avatar
                </p>
            </div>
            <div className={style.wrapper}>
                <form className={style.avatarForm}>
                    <label className={style.formLabel}>
                        Your name:
                        <input 
                            className={style.nameInput} 
                            type="text" 
                            value={name} 
                            onChange={(e) => {
                                setName(e.target.value);
                            }} 
                        />
                    </label>  
                    <div className={style.avatars}>
                        <div 
                            className={`${style.avatar} ${selectedAvatar === "tiger" ? style.selected : ""}`} 
                            onClick={() => handleAvatarClick("tiger")}>
                            <Avatar 
                                animal={tiger}
                                name={name}
                                text={"guitar"}
                            />
                        </div>
                        <div 
                            className={`${style.avatar} ${selectedAvatar === "sheep" ? style.selected : ""}`} 
                            onClick={() => handleAvatarClick("sheep")}>
                            <Avatar 
                                animal={sheep}
                                name={name}
                                text={"flute"}
                            />
                        </div>
                        <div 
                            className={`${style.avatar} ${selectedAvatar === "hedgehog" ? style.selected : ""}`} 
                            onClick={() => handleAvatarClick("hedgehog")}>
                            <Avatar 
                                animal={hedgehog}
                                name={name}
                                text={"violin"}
                            />
                        </div>
                    </div>
                    <div className={style.btnWrapper}>
                        <Link to={`/gin/${name}/${selectedAvatar}`}>
                            <Button 
                                text={"Save my avatar"}
                                disabled={!isNameValid}
                            />
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AvatarForm;