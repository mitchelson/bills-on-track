import BottomSheet, { BottomSheetProps } from "@gorhom/bottom-sheet";
import React, { memo, useRef } from "react";
import Icons from "../../Icons";
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
        <Icons name="x" />
      </S.DeleteTouchable>
      {children}
    </S.PackageBottomSheet>
  );
};

export default memo(BottomSheetContainer);
