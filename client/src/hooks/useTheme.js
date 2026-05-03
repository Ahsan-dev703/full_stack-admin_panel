import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/store/features/theme/themeSlice";

export const useTheme = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    // Apply attribute to the document element (HTML tag)
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return {
    mode,
    toggle: () => dispatch(toggleTheme()),
    isDark: mode === "dark",
  };
};
