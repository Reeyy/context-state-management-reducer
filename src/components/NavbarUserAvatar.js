import { useContext } from "react";
import { Appcontext } from "../context/app-context";

export default function NavbarUserAvatar() {
  const context = useContext(Appcontext);
  return <img src={context.user.avatar} alt="avatar" width="50" />;
}
