import { motion } from "framer-motion";

import style from "./Avatar.module.scss";

type AvatarImageProps = {
    imageSrc: string
    onClick?: () => void;
}

const AvatarImage = ({ imageSrc, onClick }: AvatarImageProps) => {
    return (
        <motion.img
            src={imageSrc}
            alt={imageSrc}
            className={style.avatarImage}
            animate={{ scale: 1 }}
            initial={{ scale: 0.3 }}
            transition={{ delay: 0.2 }}
            onClick={onClick}
        />
    );
};

export default AvatarImage;
