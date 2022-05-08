import { Appcontext } from "../context/app-context";
import { useContext } from "react";
export default function NavbarUserText() {
  const context = useContext(Appcontext);
  return (
    <span onClick={context.func}>
      {}hi {context.user.name}
    </span>
  );
}
