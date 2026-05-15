import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const persistTheme = (mode) => {
  localStorage.setItem("theme", mode);
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: getInitialTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      persistTheme(state.mode);
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      persistTheme(state.mode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
