import { useContext } from "react";
import { Appcontext } from "../context/app-context";

export default function DisplayTheme() {
  const context = useContext(Appcontext);
  return <div>{context.theme}</div>;
}
