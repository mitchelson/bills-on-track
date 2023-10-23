import React from "react";

import { categories } from "../../../../src/screens/Transactions/CategorySelector/categories";
import CategoryIcon from "../CategoryIcons";
import { CategoriesList } from "../CategoryIcons/type";
import * as S from "./styles";

interface ItemCategoryProps {
  category: CategoriesList;
  onPress: () => void;
}

const ItemCategory: React.FC<ItemCategoryProps> = ({ category, onPress }) => {
  return (
    <S.BoxCategory onPress={onPress}>
      <S.Row>
        <CategoryIcon category={category} />
        <S.CategoryText>{categories[category].name}</S.CategoryText>
      </S.Row>
    </S.BoxCategory>
  );
};

export default ItemCategory;
