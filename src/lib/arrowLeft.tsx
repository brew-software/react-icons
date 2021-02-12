import {
  faArrowAltCircleLeft as solidAltCirle,
  faArrowCircleLeft as solidCircle,
  faArrowLeft as solid,
} from "@fortawesome/free-solid-svg-icons";
import { createFontawesomeIcon } from "./+fontawesomeIcon";

const ArrowLeft = createFontawesomeIcon({
  solid,
  solidAltCirle,
  solidCircle,
});

export default ArrowLeft;
