import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../domain/theme/ThemeContext";
import { ThemeEditor } from "./ThemeEditor";

export const AppHeader = () => {
  const theme = useContext(ThemeContext);

  return (
    <header className="app-header">
      <ThemeEditor />
      <h1 style={{ color: theme.primaryColor }}>Bookmonkey</h1>
      <nav>
        <NavLink to="">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};
