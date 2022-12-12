import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import { ThemeContext } from "./domain/theme/ThemeContext";

function App() {
  const [primaryColor, setPrimaryColor] = useState("tomato");

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      <div className="App">
        <AppHeader />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
