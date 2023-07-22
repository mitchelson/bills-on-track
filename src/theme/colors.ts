export const darkTheme = {
  primary: "#28B473",
  background: "#333",

  title: "#fff",
  text: "#fff",

  accent: "#8A85FF",
  grey100: "#888",
  black: "#000",

  grey300: "#333",
  grey200: "#222",

  danger: "#A33",
};

export type BaseTheme = typeof darkTheme;
export type Theme = { theme: BaseTheme };
