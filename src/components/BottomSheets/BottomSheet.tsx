import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import BottomSheet from "./BottomSheetDefault";

// interface BottomSheetContainerProps extends ComponentType {
//   children: JSX.Element;
//   snapPoints: string[];
//   hideCloseButton: boolean;
// }

const BottomSheetContainer = ({
  children,
  snapPoints,
  hideCloseButton = false,
}: any) => {
  const navigation = useNavigation();
  const route = useRoute();

  // @ts-expect-error TS(2339): Property 'dynamicSnapPoints' does not exist on typ... Remove this comment to see the full error message
  const { dynamicSnapPoints } = route.params || {};

  return (
    <BottomSheet
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      hideCloseButton={hideCloseButton}
      snapPoints={dynamicSnapPoints || snapPoints}
      onClose={() => {
        navigation.goBack();
      }}
    >
      {children}
    </BottomSheet>
  );
};

export const WrapWithBottomSheet = gestureHandlerRootHOC(BottomSheetContainer);
