import BottomSheet from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

export const PackageBottomSheet = styled(BottomSheet)`
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const DeleteTouchable = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  z-index: 99;
  padding-right: 16px;
`;

