import BottomSheet from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

export const PackageBottomSheet = styled(BottomSheet)`
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 10px;
  shadow-opacity: 0.2;
  shadow-radius: 20px;
  elevation: 20;
`;

export const DeleteTouchable = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  z-index: 99;
  padding-right: 16px;
`;

