import { motion } from "framer-motion";

import InstrumentButtons from "../InstrumentButtons/InstrumentButtons";

import style from "./Instrument.module.scss";

type InstrumentProps = {
    instrumentSrc: string;
    clickCount: number
    currentInstrument: string;
    clickAudioCount: number;
    setClickAudioCount: (value: number) => void;
    setShowAudioButtons: (boolean: boolean) => void;
    audioRef: React.RefObject<HTMLAudioElement>;
    showAudioButtons: boolean;
}

const Instrument = ({ 
    currentInstrument, 
    clickAudioCount, 
    setClickAudioCount, 
    setShowAudioButtons, 
    audioRef, 
    clickCount, 
    instrumentSrc,
    showAudioButtons,
}: InstrumentProps) => {

    let instrument = null;

    if (clickCount >= 6) {
        instrument = (
            <motion.div 
                className={style.instrument}
                animate={{ scale: 1 }}
                initial={{ scale: 0.3 }}
                transition={{ delay: 0.2 }}
            >
                {clickAudioCount < 10 ? (
                    <span className={style.instrumentInfo}>
                        Click to squares to start playing
                    </span>
                ) : (
                    <span className={style.instrumentInfo}>
                        You need to try your best
                    </span>
                )}
                <motion.img
                    src={instrumentSrc}
                    alt={instrumentSrc}
                    className={style.instrumentImage}
                    animate={{ scale: 1 }}
                    initial={{ scale: 0.3 }}
                    transition={{ delay: 0.2 }}
                />
                {showAudioButtons && (
                    <InstrumentButtons 
                        currentInstrument={currentInstrument}
                        clickAudioCount={clickAudioCount}
                        setClickAudioCount={setClickAudioCount}
                        setShowAudioButtons={setShowAudioButtons}
                        audioRef={audioRef}
                    />
                )}
            </motion.div>
        );
    }

    return (
        <div className={style.playableInstrument}>
            {instrument}
        </div>
    );
};

export default Instrument;
