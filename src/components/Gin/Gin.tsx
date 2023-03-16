import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import style from "./Gin.module.scss";
import { fluteAudioFiles, guitarAudioFiles, violinAudioFiles } from "../../utils/audioFiles";
import lampImage from "../../assets/newLamp.png";
import ginImage from "../../assets/jaunais_aladins2.png";
import { getGinDetails } from "../../utils/getGinDetails";


function Gin() {
    const { name, src = "" } = useParams();

    const { imageSrc, instrumentSrc, currentInstrument } = getGinDetails(src);
    
    const audioFiles = [
        { buttonClass: "audioButton1", file: currentInstrument === "flute" ? fluteAudioFiles[0] : currentInstrument === "guitar" ? guitarAudioFiles[0] : violinAudioFiles[0] },
        { buttonClass: "audioButton2", file: currentInstrument === "flute" ? fluteAudioFiles[1] : currentInstrument === "guitar" ? guitarAudioFiles[1] : violinAudioFiles[1] },
        { buttonClass: "audioButton3", file: currentInstrument === "flute" ? fluteAudioFiles[2] : currentInstrument === "guitar" ? guitarAudioFiles[2] : violinAudioFiles[2] },
        { buttonClass: "audioButton4", file: currentInstrument === "flute" ? fluteAudioFiles[3] : currentInstrument === "guitar" ? guitarAudioFiles[3] : violinAudioFiles[3] },
        { buttonClass: "audioButton5", file: currentInstrument === "flute" ? fluteAudioFiles[4] : currentInstrument === "guitar" ? guitarAudioFiles[4] : violinAudioFiles[4] },
    ];

    const [clickCount, setClickCount] = useState(0);
    const [clickAudioCount, setClickAudioCount] = useState(0);
    const [ginImageSrc, setGinImageSrc] = useState(lampImage);
    const audioRef = useRef<HTMLAudioElement>(null);

    let message = null;
    let instrument = null;
    let paragraphText = (
        <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ delay: 1 }}>
            <p>
            Congratulations, {name}. You have stumbled upon a mysterious lamp.
            Who knows what wonders it might hold? Click that lamp and see what secrets
            it reveals!
            </p>
        </motion.div>
    );

    if (clickCount >= 3 && clickCount < 6) {
        message = 
            <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ delay: 0.5 }}
            >
                <p className={style.message}>Click harder!</p>
            </motion.div>;
    } else if (clickCount >= 6) {
        instrument = (
            <motion.div 
                className={style.instrument}
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ delay: 0.2 }}
            >
                <span className={style.instrumentInfo}>Play your instrument</span>
                <img
                    src={instrumentSrc}
                    alt={instrumentSrc}
                    className={style.instrumentImage}
                />
                {audioFiles.map((audioFile) => (
                    <button 
                        className={style[audioFile.buttonClass]} 
                        key={audioFile.buttonClass}
                        onClick={() => {
                        audioRef.current!.src = audioFile.file;
                        audioRef.current!.play();
                        setClickAudioCount(clickAudioCount + 1);
                        }}
                    ></button>
                ))}
            </motion.div>
        );
        paragraphText = (
            <motion.p
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ delay: 0.2 }}
            >
                Hey {name}, you have freed me! I see you have an instrument. If you play me
                that instrument and I like it, I will give you everything you desire, i repeat everything!.
            </motion.p>
        );
    }

    if (clickAudioCount === 10) {
        paragraphText = (
            <motion.p
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ delay: 0.8 }}
                className={style.paragraphTextColor}
            >
                Im sorry, but I dont like your music. Its just not my style, but I still think youre talented. If youd like, you can try again.
            </motion.p>
        );
    }

    return (
        <div>
            <div className={style.title}>
                {paragraphText}
            </div>
            <div className={style.wrapper}>
                <motion.div 
                    className={style.imageWrapper}
                >
                    <img
                        src={imageSrc}
                        alt={imageSrc}
                        className={style.avatarImage}
                    />
                    <motion.div 
                        className={style.lamp}
                    >
                        <img 
                            src={ginImageSrc} 
                            alt={lampImage} 
                            className={style.ginImage} 
                            onClick={() => {
                                setClickCount(clickCount + 1);
                                if (clickCount >= 5) {
                                    setGinImageSrc(ginImage);
                                }
                            }}
                        />
                        {message}
                    </motion.div>
                </motion.div>
                <div className={style.currentInstrumentWrapper}>
                    <div className={style.playableInstrument}>
                        {instrument}
                    </div>
                    <audio ref={audioRef}></audio>
                </div>
                <div className={style.bestPlayButton}>
                    {clickAudioCount === 10 && (
                        <button 
                            className={style.button62}
                        >
                            Play your best
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Gin;
