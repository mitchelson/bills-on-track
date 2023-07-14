import { calcBalance } from "../../common";
import * as S from "./styles";
import { useHomeView } from "./viewModel";

const Home = () => {
  const { user, balance } = useHomeView();
  return (
    <S.Container>
      <S.Content>
        <S.Row>
          <S.Avatar source={{ uri: user?.picture }} />
          <S.Box>
            <S.Title>Bem Vindo</S.Title>
            <S.Name>{user?.given_name}</S.Name>
          </S.Box>
        </S.Row>
        <S.BoxBalance>
          <S.TitleBalance>Saldo</S.TitleBalance>
          <S.Balance>
            {`${calcBalance(balance).split(",")[0]}`}
            <S.BalanceCents>
              {`,${calcBalance(balance).split(",")[1]}`}
            </S.BalanceCents>
          </S.Balance>
        </S.BoxBalance>
      </S.Content>
    </S.Container>
  );
};

export default Home;
