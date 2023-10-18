import React, { useEffect, useState } from "react";

import dayjs from "dayjs";
import * as S from "./styles";

type MonthCarousel = {
  setActualMonthView: (month: dayjs.Dayjs) => void;
};

export const MonthCarousel: React.FC<MonthCarousel> = ({
  setActualMonthView,
}) => {
  const actualMonth = dayjs();
  const [currentMonth, setActualMonth] = useState(actualMonth);

  const nextMonth = () => {
    setActualMonth(currentMonth.add(1, "month"));
  };

  const prevMonth = () => {
    setActualMonth(currentMonth.add(-1, "month"));
  };

  useEffect(() => {
    setActualMonthView(currentMonth);
  }, [currentMonth]);

  return (
    <S.Container>
      <S.PrevNextButton onPress={prevMonth}>
        <S.PrevNextMonth>
          {currentMonth.add(-1, "month").format("MMMM")}
        </S.PrevNextMonth>
      </S.PrevNextButton>
      <S.CurrentButton>
        <S.CurrentMonth>{currentMonth.format("MMMM")}</S.CurrentMonth>
      </S.CurrentButton>
      <S.PrevNextButton onPress={nextMonth}>
        <S.PrevNextMonth>
          {currentMonth.add(1, "month").format("MMMM")}
        </S.PrevNextMonth>
      </S.PrevNextButton>
    </S.Container>
  );
};
