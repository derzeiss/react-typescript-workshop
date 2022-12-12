import { useContext } from "react";
import { ThemeContext } from "../domain/theme/ThemeContext";

export const ThemeEditor = () => {
  const theme = useContext(ThemeContext);

  const handleColorClick = (color: string) => {
    theme.setPrimaryColor(color);
  };

  return (
    <div className="theme-editor">
      <button
        style={{ background: "tomato" }}
        onClick={() => handleColorClick("tomato")}
      />
      <button
        style={{ background: "olivedrab" }}
        onClick={() => handleColorClick("olivedrab")}
      />
    </div>
  );
};
