import * as MiniIcons from "react-native-heroicons/mini";

export type CategoriesList =
  "home"
  | "education"
  | "electronic"
  | "school"
  | "restaurant"
  | "health"
  | "services"
  | "supermarket"
  | "transport"
  | "gift"
  | "award"
  | "salary"
  | "others";


type Icon = keyof typeof MiniIcons;

type Categories = {
  category: CategoriesList,
  icon: Icon,
  color: string,
  type: "outcome" | "income" | "both"
};

type Cat = { [x: string]: Categories }
