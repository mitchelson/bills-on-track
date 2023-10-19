export const darkTheme = {
  primary: "#28B473",
  background: "#fff",

  title: "#212121",
  text_300: "#616161",
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

  grey_500: "#9E9E9E",
  grey_600: "#999999",

  danger: "#A33",

  primaryButton: "#16C64F",
  secondaryButton: "#fff",
  buttonDisabled: "#ababab",

  textButtonDisabled: "#555",
  textButtonOutlineDisabled: "#999",
};

export type BaseTheme = typeof darkTheme;
export type Theme = { theme: BaseTheme };
