import { ReactNode, useState } from "react";

interface HideableProps {
  children: ReactNode;
}

export const Hideable: React.FC<HideableProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="hideable">
      {visible && children}
      <button className="tertiary" onClick={handleToggle}>
        {visible ? "- hide" : "+ show"} details
      </button>
    </div>
  );
};
