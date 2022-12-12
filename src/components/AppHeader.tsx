import { useContext } from "react";
import { ThemeContext } from "../domain/theme/ThemeContext";

export const AppHeader = () => {
  const theme = useContext(ThemeContext);

  return (
    <header className="app-header">
      <h1 style={{ color: theme.primaryColor }}>Bookmonkey</h1>
    </header>
  );
};
