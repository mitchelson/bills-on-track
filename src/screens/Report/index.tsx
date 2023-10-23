import dayjs from "dayjs";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MonthCarousel } from "../../../core/ui/components/MonthCarousel";
import { ReportItem } from "../../../core/ui/components/ReportItem";
import { currencyView } from "../../common";
import * as S from "./styles";

type Section = {
  title: string;
  data: string[];
};

const Report = () => {
  const { allTransactions } = useSelector((store) => store.transactions);
  const [actualMonthView, setActualMonthView] = useState<dayjs.Dayjs>(dayjs());
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [sections, setSections] = useState<Section[]>([]);

  const calcMonthBalance = () => {
    let totalOutcomeTemp = 0;
    Object.keys(allTransactions[actualMonthView.format("YYYY-MM")] || {})?.map(
      (day) => {
        Object.keys(
          allTransactions[actualMonthView.format("YYYY-MM")][day],
        ).map((transaction) => {
          totalOutcomeTemp +=
            allTransactions[actualMonthView.format("YYYY-MM")][day][transaction]
              .value;
        });
      },
    );
    setTotalOutcome(totalOutcomeTemp);
  };

  const mountSectionData = () => {
    const tempSections: Section[] = [];
    Object.keys(allTransactions[actualMonthView.format("YYYY-MM")] || {}).map(
      (e) => {
        const item = {
          title: e,
          data: Object.keys(
            allTransactions[actualMonthView.format("YYYY-MM")][e],
          ),
        };
        tempSections.push(item);
      },
    );
    setSections(tempSections);
  };

  const renderItem = ({ item, section }: unknown) => {
    const transactionId = item as string;
    const dayTransaction = section.title as string;
    const currentMonth = actualMonthView.format("YYYY-MM");
    if (!dayjs(dayTransaction).isSame(actualMonthView, "month")) return;

    if (isEmpty(allTransactions[currentMonth][dayTransaction])) return;

    const transaction =
      allTransactions[currentMonth][dayTransaction][transactionId] || {};

    return <ReportItem transaction={transaction} />;
  };

  const isToday = (x: string) => {
    const today = dayjs();
    const day = dayjs(x);
    if (day.isSame(today, "day")) {
      return "Hoje";
    }
    return day.format("DD [de] MMMM");
  };

  useEffect(() => {
    mountSectionData();
    calcMonthBalance();
  }, [actualMonthView]);

  return (
    <S.Container>
      <S.Header>
        <S.Row>
          <S.TitlePage>Transações</S.TitlePage>
          <S.YearReport>{actualMonthView.format("YYYY")}</S.YearReport>
        </S.Row>
        <MonthCarousel
          setActualMonthView={setActualMonthView}
          currentMonth={actualMonthView}
        />
        <S.TotalOutcome>{currencyView(totalOutcome)}</S.TotalOutcome>
      </S.Header>
      <S.SectionList
        sections={sections}
        ListEmptyComponent={
          <S.Empty>
            {`Nenhum lançamento\npara o mês de ${actualMonthView.format(
              "MMMM",
            )}`}
          </S.Empty>
        }
        renderSectionHeader={({ section }) => (
          <S.BoxDayTransaction>
            <S.Text>{isToday(section.title)}</S.Text>
          </S.BoxDayTransaction>
        )}
        renderItem={renderItem}
      />
    </S.Container>
  );
};

export default Report;
