import tigerImage from "../assets/tiger.png";
import sheepImage from "../assets/vecteezy_sheep-playing-music-cute-animal-play-flute-music-instrument_11235418_893.png";
import hedgehogImage from "../assets/ezitis.png";
import flute from "../assets/NewFlute.png";
import guitar from "../assets/pngimg.com - guitar_PNG3348.png";
import violin from "../assets/jauna_spelejama_vijole.png";

export const getGinDetails = (src:string) => {
    let imageSrc;
    let instrumentSrc;
    let currentInstrument;
  
    switch (src) {
    case "tiger":
        imageSrc = tigerImage;
        instrumentSrc = guitar;
        currentInstrument = "guitar";
        break;
    case "sheep":
        imageSrc = sheepImage;
        instrumentSrc = flute;
        currentInstrument = "flute";
        break;
    case "hedgehog":
        imageSrc = hedgehogImage;
        instrumentSrc = violin;
        currentInstrument = "violin";
        break;
    default:
        imageSrc = src;
    }
  
    return { imageSrc, instrumentSrc, currentInstrument };
};