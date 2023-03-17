import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import style from "./Gin.module.scss";

import { fluteAudioFiles, guitarAudioFiles, violinAudioFiles } from "../../utils/audioFiles";
import { getGinDetails } from "../../utils/getGinDetails";

import lampImage from "../../assets/newLamp.png";
import ginImage from "../../assets/jaunais_aladins2.png";
import DisplayTitle from "../DisplayTitle/DisplayTitle";
import Instrument from "../Instrument/Instrument";

const Gin = () => {
    const [likeMusic, setLikeMusic] = useState(false);

    const { name = "", src = "" } = useParams();
    const { imageSrc, instrumentSrc = "", currentInstrument = "" } = getGinDetails(src);

    const [clickCount, setClickCount] = useState(0);
    const [clickAudioCount, setClickAudioCount] = useState(0);
    const [ginImageSrc, setGinImageSrc] = useState(lampImage);
    const [showAudioButtons, setShowAudioButtons] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    if (isButtonDisabled) {
        setTimeout(() => {
            setLikeMusic(true);
        }, 3000);
    }

    return (
        <div>
            <DisplayTitle 
                name={name}
                clickCount={clickCount}
                clickAudioCount={clickAudioCount}
                likeMusic={likeMusic}
            />
            <div className={style.wrapper}>
                <motion.div 
                    className={style.imageWrapper}
                >
                    <motion.img
                        src={imageSrc}
                        alt={imageSrc}
                        className={style.avatarImage}
                        animate={{ scale: 1 }}
                        initial={{ scale: 0.3 }}
                        transition={{ delay: 0.2 }}
                    />
                    <motion.img 
                        src={ginImageSrc} 
                        alt={lampImage} 
                        className={style.ginImage}
                        animate={{ scale: 1 }}
                        initial={{ scale: 0.3 }}
                        transition={{ delay: 0.2 }} 
                        onClick={() => {
                            setClickCount(clickCount + 1);
                            if (clickCount >= 5) {
                                setGinImageSrc(ginImage);
                            }
                        }}
                    />
                </motion.div>
                <div className={style.currentInstrumentWrapper}>
                    <Instrument 
                        instrumentSrc={instrumentSrc}
                        clickCount={clickCount}
                        currentInstrument={currentInstrument}
                        clickAudioCount={clickAudioCount}
                        setClickAudioCount={setClickAudioCount}
                        setShowAudioButtons={setShowAudioButtons}
                        audioRef={audioRef}
                        showAudioButtons={showAudioButtons}
                    />
                    <audio ref={audioRef}></audio>
                </div>
                <div className={style.bestPlayButton}>
                    {clickAudioCount === 10 && (
                        <button 
                            className={style.button62}
                            onClick={() => {
                                setIsButtonDisabled(true);
                                if (currentInstrument === "flute") {
                                    audioRef.current!.src = fluteAudioFiles[5];
                                } else if (currentInstrument === "guitar") {
                                    audioRef.current!.src = guitarAudioFiles[5];
                                } else if (currentInstrument === "violin") {
                                    audioRef.current!.src = violinAudioFiles[5];
                                }
                                audioRef.current!.play();
                            }}
                            disabled={isButtonDisabled}
                        >
                            Click to surprise gin
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gin;
