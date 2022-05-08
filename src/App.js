import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Appcontext } from "./context/app-context";
import Setting from "./components/Setting";
import DisplayTheme from "./components/DisplayTheme";
import ToogleTheme from "./components/ToogleTheme";

function App() {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const user = {
      name: "jooohn dwa",
      avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    };

    setUser(user);
  }, []);

  const appContextValue = {
    user: user,
    func: () => alert("memasukan inject fucntion lewat contex"),
    /* //!melakukan set data use state beda  file dengna contex*/
    setUser: setUser,
    theme: theme,
    setTheme: setTheme,
  };
  return (
    <div className="App">
      <Appcontext.Provider value={appContextValue}>
        <Navbar />
        {/* //!untuk set data mengunakan context beda file  */}
        <hr />
        <Setting />
        <hr />
        <DisplayTheme />
        <ToogleTheme />
      </Appcontext.Provider>
    </div>
  );
}

export default App;
