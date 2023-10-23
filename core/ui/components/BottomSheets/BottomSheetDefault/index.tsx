import BottomSheet, { BottomSheetProps } from "@gorhom/bottom-sheet";
import React, { memo, useRef } from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as S from "./style";

const BottomSheetContainer = ({
  children,
  hideCloseButton = false,
  ...props
}: BottomSheetProps & { children: JSX.Element; hideCloseButton: boolean }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleClosePress = () => bottomSheetRef.current?.close();

  return (
    <S.PackageBottomSheet
      ref={bottomSheetRef}
      enablePanDownToClose
      animateOnMount={true}
      keyboardBehavior="interactive"
      {...props}
    >
      <S.DeleteTouchable onPress={handleClosePress}>
        <XMarkIcon />
      </S.DeleteTouchable>
      {children}
    </S.PackageBottomSheet>
  );
};

export default memo(BottomSheetContainer);
