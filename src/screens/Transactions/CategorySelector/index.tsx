import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { CheckIcon } from "react-native-heroicons/solid";
import CategoryIcon from "../../../components/CategoryIcons";
import { CategoriesList } from "../../../components/CategoryIcons/type";
import { categories } from "./categories";
import * as S from "./styles";

const CategorySelector = ({ navigation, route }: any) => {
  const { category = "home" } = route.params || {};
  const handlePress = (cat: string) => {
    navigation.navigate("NewTransaction", {
      category: cat,
    });
  };

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    const categoryItem = item as CategoriesList;
    if (categories[categoryItem].type === "income") return null;
    return (
      <S.BoxCategory onPress={() => handlePress(categoryItem)}>
        <S.Row>
          <CategoryIcon category={categoryItem} />
          <S.CategoryText>{categories[categoryItem].name}</S.CategoryText>
        </S.Row>
        <S.Selector selectCategory={category === categoryItem}>
          {category === categoryItem ? (
            <CheckIcon color="#fff" size={15} />
          ) : null}
        </S.Selector>
      </S.BoxCategory>
    );
  };

  return (
    <S.Container>
      <S.LineOfModal />
      <S.TitleText>{`Selecionar categoria\n`}</S.TitleText>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Object.keys(categories)}
        renderItem={_renderItem}
      />
    </S.Container>
  );
};

export default CategorySelector;
