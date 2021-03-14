import { createFontawesomeIcon } from "./+fontawesomeIcon";
import {
  faUser as solid,
  faUserCircle as solidCircle,
  faUserCheck as solidCheck,
  faUserTimes as solidTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser as regular,
  faUserCircle as regularCircle,
} from "@fortawesome/free-regular-svg-icons";

const UserIcon = createFontawesomeIcon({
  solid,
  regular,
  solidCircle,
  regularCircle,
  solidCheck,
  solidTimes,
});

export default UserIcon;
