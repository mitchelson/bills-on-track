import * as MiniIcons from "react-native-heroicons/mini";
import { categories } from "./icons";
import * as S from "./styles";
import { CategoriesList } from "./type";

interface Props {
  category: CategoriesList;
}

const CategoryIcon = (props: Props): JSX.Element => {
  const { category } = props;
  const { ...icons } = MiniIcons;

  const TheIcon = icons[categories[category].icon];

  return (
    <S.Container color={categories[category].color}>
      <TheIcon color={"#fff"} />
    </S.Container>
  );
};

export default CategoryIcon;
