import { useContext } from "react";
import { Appcontext } from "../context/app-context";

export default function ToogleTheme() {
  const context = useContext(Appcontext);

  return (
    <button
      onClick={() =>
        context.setTheme(context.theme === "light" ? "dark" : "light")
      }
    >
      Toogle theme
    </button>
  );
}
