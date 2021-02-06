import { createFontawesomeIcon } from "./+fontawesomeIcon";
import {
	faUser as solidUser,
	faUserCircle as solidCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
	faUser as regularUser,
	faUserCircle as regularCircle,
} from "@fortawesome/free-regular-svg-icons";

const UserIcon = createFontawesomeIcon({
	solid: solidUser,
	regular: regularUser,
	solidCircle: solidCircle,
	regularCircle: regularCircle,
});

export default UserIcon;
