import { useNavigation } from "@react-navigation/native";
import React from "react";
import Icons from "../../../components/Icons";
import * as S from "./styles";

const TermsOfUse: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <S.Container>
      <S.Content>
        <S.BackButton onPress={goBack}>
          <Icons name="arrow-left" />
        </S.BackButton>
        <S.Title>Termos de Uso e Aviso de Privacidade</S.Title>
        <S.Description>
          {`
          \nBem-vindo ao aplicativo 'Bills on Track'.
          \nAntes de utilizar nossos serviços, por favor, leia atentamente este Termo de Uso.
          \nLogin com Serviços do Google
          \nAo utilizar o aplicativo 'Bills on Track', você terá a opção de realizar o login utilizando seus serviços do Google. Lembre-se de que, ao optar por essa forma de login, você estará concordando com os termos de serviço e políticas de privacidade do Google. O aplicativo 'Bills on Track' não tem acesso às suas credenciais de login do Google, garantindo assim a segurança e privacidade dos seus dados.
          \nArmazenamento de Dados
          \nPara fornecer a funcionalidade completa do aplicativo 'Bills on Track', armazenamos localmente em seu dispositivo todos os dados referentes às suas transações financeiras e informações associadas. Esses dados são utilizados exclusivamente para o correto funcionamento do aplicativo e para fornecer a você uma experiência personalizada e eficiente no gerenciamento das suas finanças mensais. As informações armazenadas no aplicativo não são compartilhadas ou transferidas para servidores externos ou terceiros.
          \nCompartilhamento de Dados
          \nGarantimos a você que em nenhuma circunstância compartilharemos seus dados pessoais, transações financeiras ou informações confidenciais com terceiros. Sua privacidade é nossa prioridade, e os dados armazenados no aplicativo são exclusivamente utilizados para melhorar a experiência do usuário e o desempenho do aplicativo.
          \nResponsabilidade do Usuário
          \nAo utilizar o aplicativo 'Bills on Track', você é o único responsável pelas informações fornecidas e pelas transações registradas. Mantenha suas credenciais de login seguras e não compartilhe sua conta com terceiros. O aplicativo 'Bills on Track' não assume qualquer responsabilidade por informações incorretas inseridas pelo usuário, uma vez que todas as informações são de responsabilidade exclusiva do próprio usuário.
          \nAtualizações e Termos Revisados
          \nPeriodicamente, podemos atualizar este Termo de Uso para refletir alterações nos nossos serviços ou práticas. Quando ocorrerem alterações relevantes, notificaremos você por meio do aplicativo ou de outro meio de comunicação apropriado. Ao continuar a utilizar o aplicativo 'Bills on Track' após qualquer alteração nos termos, você estará concordando com as modificações realizadas.
          \nAo clicar em 'Aceitar' ou utilizar o aplicativo 'Bills on Track', você concorda com todos os termos e condições estabelecidos neste documento.`}
        </S.Description>
      </S.Content>
    </S.Container>
  );
};

export default TermsOfUse;
