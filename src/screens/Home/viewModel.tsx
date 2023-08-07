import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { googleIcon } from "../../assets";
import * as S from './styles';
export const useHomeView = () => {
  const user = useSelector((state) => state.user.profile);
  const [balance, setBalance] = useState(120000);
  const [expenses, setExpenses] = useState(120000);
  const [expected, setExpected] = useState(120000);
  const [current, setCurrent] = useState(120000);
  const data = {
    labels: [
      "Energia",
      "Luz",
      "Internet",
      "Água",
    ],
    data: [0.2, 0.6, 0.4, 0.8],
    colors: [
      "rgba(255, 0, 0,0.5)",
      "rgba(238, 130, 238,0.6)",
      "rgba(138, 30, 238,0.6)",
      "rgba(138, 130, 138,0.6)",
    ],
  };
  const lastReleaseData = [{
    icon: googleIcon,
    date: '24/09/2023',
    name: 'Netflix',
    value: '24.00'
  }, {
    icon: googleIcon,
    date: '24/09/2023',
    name: 'Netflix',
    value: '24.00'
  }, {
    icon: googleIcon,
    date: '24/09/2023',
    name: 'Netflix',
    value: '24.00'
  },]
  const renderItem = ({ item, index }: any) => {
    const color = data.colors[index];
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
        <View style={{ width: 25, height: 20, backgroundColor: color, marginEnd: 8, borderRadius: 4 }} />
        <Text>{item}</Text>
      </View>
    );
  }
  const renderList = ({ item, index }: any) => {
    return (
      <TouchableOpacity style={{ width: '100%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <S.UserImage source={googleIcon} />
        <View style={{}}>
          <Text>{item.name}</Text>
          <Text>{item.date}</Text>
        </View>
        <Text>{item.value}</Text>
      </TouchableOpacity>
    )
  }
  return {
    renderList,
    renderItem,
    data,
    user,
    balance,
    lastReleaseData
  };
};
