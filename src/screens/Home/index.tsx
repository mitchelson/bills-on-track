import { Ionicons } from '@expo/vector-icons';
import * as S from "./styles";
import { useHomeView } from "./viewModel";

const Home = () => {
  const { user, balance, data, renderItem, renderList, lastReleaseData } = useHomeView();
  return (
    <S.Container>
      <S.Content>
        <S.Row>
          <S.Row>

            <S.Avatar source={{ uri: user?.picture }} />
            <S.Box>
              <S.Title>Bem Vindo</S.Title>
              <S.Name>{user?.given_name}</S.Name>
            </S.Box>
          </S.Row>
          <S.Notification>
            <Ionicons name="notifications-outline" size={32} color="white" />
          </S.Notification>
        </S.Row>
        {/* 
        <MonthlyFinanceBox
          currentBalance={0}
          expectedBalance={0}
          monthlyExpenses={0}
          month="Julho"
        /> */}
        {/* <Button text="Botão" width={40} /> */}
      </S.Content>
    </S.Container>
  );
};

export default Home;
