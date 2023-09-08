import dayjs from "dayjs";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import * as S from "./styles";

const Report = () => {
  const { monthTransactions } = useSelector((store) => store.transactions);
  const actualMonth = dayjs().format("YYYY-MM");
  console.log("monthTransactions[2023-09] => ", monthTransactions[actualMonth]);

  return (
    <S.Container>
      <S.Content>
        <S.TitlePage>Relatórios</S.TitlePage>
        <FlatList
          data={Object.keys(monthTransactions[actualMonth])}
          renderItem={({ item }) => (
            <S.Text>{monthTransactions[actualMonth][item].name}</S.Text>
          )}
        />
      </S.Content>
    </S.Container>
  );
};

export default Report;
