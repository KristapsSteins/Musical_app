import { motion } from "framer-motion";

import style from "./Display.module.scss";

type DisplayTitleProps = {
    name: string;
    clickCount: number;
    clickAudioCount: number;
    likeMusic: boolean;
}

const DisplayTitle = ({ name, clickCount, clickAudioCount, likeMusic }: DisplayTitleProps) => {
    let titleText = (
        <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0.3 }}
            transition={{ delay: 0.2 }}
        >
            <p>
            Congratulations, {name}. You have stumbled upon a mysterious lamp.
            Who knows what wonders it might hold? Click that lamp and see what secrets
            it reveals!
            </p>
        </motion.div>
    );

    if (clickCount >= 6) {
        titleText = (
            <motion.p
                animate={{ scale: 1 }}
                initial={{ scale: 0.3 }}
                transition={{ delay: 0.1 }}
            >
                Hey {name}, you have freed me! I see you have an instrument. If you play me
                that instrument and I like it, I will give you everything you desire, i repeat everything!.
            </motion.p>
        );
    }

    if (clickAudioCount === 10) {
        titleText = (
            <motion.p
                animate={{ scale: 1 }}
                initial={{ scale: 0.3 }}
                transition={{ delay: 0.2 }}
                className={style.paragraphTextColor}
            >
                I apologize, but your music doesn't resonate with me. It's simply not in line with my personal taste. If you're interested, you could consider giving it another shot.
            </motion.p>
        );
    }

    if (likeMusic) {
        titleText = (
            <motion.p
                animate={{ scale: 1 }}
                initial={{ scale: 0.3 }}
                transition={{ delay: 0.2 }}
            >
                I like your music
            </motion.p>
        );
    }

    return (
        <div className={style.title}>
            {titleText}
        </div>
    );
};

export default DisplayTitle;
