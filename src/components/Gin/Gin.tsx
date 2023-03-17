import { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";

import style from "./Gin.module.scss";

import { fluteAudioFiles, guitarAudioFiles, violinAudioFiles } from "../../utils/audioFiles";
import { getGinDetails } from "../../utils/getGinDetails";

import lampImage from "../../assets/newLamp.png";
import ginImage from "../../assets/Artboard 1.png";
import DisplayTitle from "../DisplayTitle/DisplayTitle";
import Instrument from "../Instrument/Instrument";
import AvatarImage from "../AvatarImage/AvatarImage";
import Button from "../Button/Button";

const Gin = () => {
    const { name, src } = useParams();
    const { imageSrc, instrumentSrc, currentInstrument } = getGinDetails(src!);
    
    const [clickCount, setClickCount] = useState(0);
    const [clickAudioCount, setClickAudioCount] = useState(0);
    const [ginImageSrc, setGinImageSrc] = useState(lampImage);
    const [likeMusic, setLikeMusic] = useState(false);
    const [showAudioButtons, setShowAudioButtons] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    if (isButtonDisabled) {
        setTimeout(() => {
            setLikeMusic(true);
        }, 3000);
    }

    const handleImageClick = () => {
        setClickCount(clickCount + 1);
        if (clickCount >= 5) {
            setGinImageSrc(ginImage);
        }
    };

    const handleButtonClick = () => {
        setIsButtonDisabled(true);
        if (currentInstrument! === "flute") {
            audioRef.current!.src = fluteAudioFiles[5];
        } else if (currentInstrument! === "guitar") {
            audioRef.current!.src = guitarAudioFiles[5];
        } else if (currentInstrument! === "violin") {
            audioRef.current!.src = violinAudioFiles[5];
        }
        audioRef.current!.play();
    };

    return (
        <div>
            <DisplayTitle 
                name={name!}
                clickCount={clickCount}
                clickAudioCount={clickAudioCount}
                likeMusic={likeMusic}
            />
            <div className={style.wrapper}>
                <div className={style.imageWrapper}>
                    <AvatarImage 
                        imageSrc={imageSrc}
                    />
                    <AvatarImage 
                        imageSrc={ginImageSrc}
                        onClick={handleImageClick}
                    />
                </div>
                <div className={style.clickHarderWrapper}>
                    {clickCount >= 3 && clickCount < 6 && (
                        <span>
                            Click harder!!!
                        </span>
                    )}
                </div>
                <div className={style.currentInstrumentWrapper}>
                    <Instrument 
                        instrumentSrc={instrumentSrc!}
                        clickCount={clickCount}
                        currentInstrument={currentInstrument!}
                        clickAudioCount={clickAudioCount}
                        setClickAudioCount={setClickAudioCount}
                        setShowAudioButtons={setShowAudioButtons}
                        audioRef={audioRef}
                        showAudioButtons={showAudioButtons}
                    />
                    <audio ref={audioRef}></audio>
                </div>
                <div className={style.bestPlayButton}>
                    {!likeMusic ? (
                        <>
                            {clickAudioCount === 10 && (
                                <Button 
                                    text={"Click to surprise gin"}
                                    disabled={isButtonDisabled}
                                    onClick={handleButtonClick}
                                />
                            )}
                        </>
                    ) : (
                        <Link to="/" className={style.link}>
                            <Button 
                                text={"Play with different character"}
                                disabled={!isButtonDisabled}
                                onClick={handleButtonClick}
                            />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gin;
