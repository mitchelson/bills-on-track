import { FlatList, Text } from "react-native";
import { View } from "react-native";
import * as S from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { currencyView } from "../../../../src/common";
export const GeneralAccount = () => {

  const accounts=[
    {id:1,
      name:'PicPay',
      value:'3000',
      icon:"credit-card"},
  {id:2,
    name:'Nubanck',
    value:'2200',
    icon:"credit-card"},

    {id:3,
    name:'Banco do Brasil',
    value:'50',
    icon:"credit-card"},

  ]
  const renderItem=({item}:any)=>{
    return(
      <S.CardAccount>
        <View style={{flexDirection:'row', alignItems:'center',  width:'40%'}}>
        <S.IconCard>
          {/* {item.icon} */}
        </S.IconCard>
        <S.TextTitleAccount>{item.name}</S.TextTitleAccount>
        </View>
        <S.ValueAccount>{item.value}</S.ValueAccount>
      </S.CardAccount>
    )
  }

  return (
    <S.Container>
      <S.Box>
        <View>
          <S.GeneralBalance>Saldo geral</S.GeneralBalance>
          <S.GeneralBalanceValue>{currencyView(21)}</S.GeneralBalanceValue>
        </View>
        <S.BoxIcon>
          <MaterialIcons name="keyboard-arrow-right" size={22} color="#fff" />
        </S.BoxIcon>
      </S.Box>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#eee",
          marginTop: 20,
          marginBottom: 20,
        }}
      />
      <S.TitlePage>Minhas contas</S.TitlePage>
<FlatList renderItem={renderItem} data={accounts} style={{width:'100%'}}/>
      
      
    </S.Container>
  );
};
