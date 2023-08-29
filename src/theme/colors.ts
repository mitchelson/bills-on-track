export const darkTheme = {
  primary: "#28B473",
  background: "#fff",

  title: "#333",
  text: "#fff",

  red_500: "#F44236",
  green_500: "#16C64F",

  accent: "#8A85FF",
  grey100: "#888",
  black: "#000",
  white: "#fff",
  greenColor: '#008440',
  blueColor: '#6495ED',

  grey_100: "#eee",
  grey_200: "#ddd",
  grey_300: "#ccc",
  grey300: "#333",
  grey200: "#222",

  danger: "#A33",

  primaryButton: "#28B473",
  secondaryButton: "#fff",
  buttonDisabled: "#ababab",

  textButtonDisabled: "#555",
  textButtonOutlineDisabled: "#999",
};

export type BaseTheme = typeof darkTheme;
export type Theme = { theme: BaseTheme };
