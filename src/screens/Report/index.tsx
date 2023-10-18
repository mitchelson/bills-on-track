import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MonthCarousel } from "../../components/MonthCarousel";
import * as S from "./styles";

const Report = () => {
  const { monthTransactions } = useSelector((store) => store.transactions);
  const [actualMonthView, setActualMonthView] = useState<dayjs.Dayjs>(dayjs());
  const [totalOutcome, setTotalOutcome] = useState(0);

  useEffect(() => {
    let totalOutcomeTemp = 0;
    Object.keys(
      monthTransactions[actualMonthView.format("YYYY-MM")] || {},
    )?.map((e) => {
      totalOutcomeTemp +=
        monthTransactions[actualMonthView.format("YYYY-MM")][e].value || 0;
    });
    setTotalOutcome(totalOutcomeTemp);
  }, [actualMonthView]);

  return (
    <S.Container>
      <S.Header>
        <S.Row>
          <S.TitlePage>Transações</S.TitlePage>
          <S.YearReport>{actualMonthView.format("YYYY")}</S.YearReport>
        </S.Row>
        <MonthCarousel setActualMonthView={setActualMonthView} />
        <S.TotalOutcome>{totalOutcome}</S.TotalOutcome>
      </S.Header>
      <S.FlatList
        data={Object.keys(
          monthTransactions[actualMonthView.format("YYYY-MM")] || {},
        )}
        renderItem={({ item }: { item: any }) => (
          <S.Text>
            {monthTransactions[actualMonthView.format("YYYY-MM")][item].value ||
              "Teste"}
          </S.Text>
        )}
      />
    </S.Container>
  );
};

export default Report;
