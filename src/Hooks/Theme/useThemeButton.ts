import { useState } from "react";

interface ThemeButtonReturnType {
  handleThemeToggle: () => void;
  isLightMode: boolean;
}

const useThemeButton = (): ThemeButtonReturnType => {
  const [isLightMode, setIsLightMode] = useState(false);

  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    setIsLightMode((prev) => !prev);
  };

  return { handleThemeToggle, isLightMode };
};

export default useThemeButton;

