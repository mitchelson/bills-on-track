import * as S from "./styles";
import { useHomeView } from "./viewModel";

const Home = () => {
  const { user } = useHomeView();
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
      </S.Content>
    </S.Container>
  );
};

export default Home;
