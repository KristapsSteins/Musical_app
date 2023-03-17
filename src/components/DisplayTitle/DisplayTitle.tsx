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
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
        >
            <p>
            Congratulations, {name}. You have stumbled upon a mysterious lamp.
            Who knows what wonders it might hold? Click that lamp three times and see what secrets
            it reveals!
            </p>
        </motion.div>
    );

    if (clickCount >= 6) {
        titleText = (
            <motion.p
                animate={{ scale: 1 }}
                initial={{ scale: 0.3 }}
                transition={{ delay: 0.2 }}
            >
                Hello {name}! Thank you for freeing me! I can see that you have an instrument. 
                If you play a beautiful melody on it and I enjoy listening to it, 
                I will grant your every wish!
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
                Sorry, your music didn't quite fit my taste. But don't give up! You can try again and maybe next time I'll enjoy it more.
            </motion.p>
        );
    }

    if (likeMusic) {
        titleText = (
            <motion.p
                animate={{ scale: 1 }}
                initial={{ scale: 0.5 }}
                transition={{ delay: 0.2 }}
                className={style.likeText}
            >
                Your music is great! If you imagine something, I can make it happen. Just wait a bit.
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
