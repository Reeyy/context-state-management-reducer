import { useContext } from "react";
import { Appcontext } from "../context/app-context";

export default function Setting() {
  const context = useContext(Appcontext);
  return (
    <input
      type="text"
      onChange={(e) =>
        context.setUser({
          ...context.user,
          name: e.target.value,
          //!untuk set data mengunakan context beda file
          //! ... untuk ambil data di user agar yang di ubah hanya name
          //! melaui contex yang di deklarasi dengna nilai use state di app.js
        })
      }
      placeholder="ganti nama"
      //!kasih value biar menjadi controled component
      //!kasih ??'' biar ga eror kalo ga ada data
      value={context.user.name ?? ""}
    />
  );
}
