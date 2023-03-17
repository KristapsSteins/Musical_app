import style from "./InstrumentButtons.module.scss";

import { fluteAudioFiles, guitarAudioFiles, violinAudioFiles } from "../../utils/audioFiles";


type InstrumentButtonProps = {
    currentInstrument: string;
    clickAudioCount: number;
    setClickAudioCount: (value: number) => void;
    setShowAudioButtons: (boolean: boolean) => void;
    audioRef: React.RefObject<HTMLAudioElement>;
}

const InstrumentButtons = ({ currentInstrument, clickAudioCount, setClickAudioCount, setShowAudioButtons, audioRef  }: InstrumentButtonProps) => {

    const audioFiles = [
        { buttonClass: "audioButton1", file: currentInstrument === "flute" ? fluteAudioFiles[0] : currentInstrument === "guitar" ? guitarAudioFiles[0] : violinAudioFiles[0] },
        { buttonClass: "audioButton2", file: currentInstrument === "flute" ? fluteAudioFiles[1] : currentInstrument === "guitar" ? guitarAudioFiles[1] : violinAudioFiles[1] },
        { buttonClass: "audioButton3", file: currentInstrument === "flute" ? fluteAudioFiles[2] : currentInstrument === "guitar" ? guitarAudioFiles[2] : violinAudioFiles[2] },
        { buttonClass: "audioButton4", file: currentInstrument === "flute" ? fluteAudioFiles[3] : currentInstrument === "guitar" ? guitarAudioFiles[3] : violinAudioFiles[3] },
        { buttonClass: "audioButton5", file: currentInstrument === "flute" ? fluteAudioFiles[4] : currentInstrument === "guitar" ? guitarAudioFiles[4] : violinAudioFiles[4] },
    ];

    const handleAudioButtonClick = (audioFile: string) => {
        audioRef.current!.src = audioFile;
        audioRef.current!.play();
        setClickAudioCount(clickAudioCount + 1);
        if (clickAudioCount === 9) {
            setShowAudioButtons(false);
        }
    };

    return (
        <>
            <div className={style.audioButtons}>
                {audioFiles.map((audioFile) => (
                    <button
                        className={style[audioFile.buttonClass]}
                        key={audioFile.buttonClass}
                        onClick={() => {handleAudioButtonClick(audioFile.file);}}
                    ></button>
                ))}
            </div>
        </>
    );
};

export default InstrumentButtons;
