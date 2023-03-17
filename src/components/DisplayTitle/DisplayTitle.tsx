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
            <p>
                Hello {name}! Thank you for freeing me! I can see that you have an instrument. 
                If you play a beautiful melody on it and I enjoy listening to it, 
                I will grant your every wish!
            </p>
        );
    }

    if (clickAudioCount === 10) {
        titleText = (
            <p className={style.paragraphTextColor}>
                Sorry, your music didn't quite fit my taste. But don't give up! You can try again and maybe next time I'll enjoy it more.
            </p>
        );
    }

    if (likeMusic) {
        titleText = (
            <p className={style.likeMusicText}>
                Your music is great! If you imagine something, I can make it happen. Just wait a bit.
            </p>
        );
    }

    return (
        <div className={style.title}>
            {titleText}
        </div>
    );
};

export default DisplayTitle;
