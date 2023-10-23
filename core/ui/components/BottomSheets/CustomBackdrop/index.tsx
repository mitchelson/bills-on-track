import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import React from "react";

const CustomBackdrop = (props: BottomSheetBackdropProps) => {
  // animated variables
  // const containerAnimatedStyle = useAnimatedStyle(() => ({
  //   opacity: interpolate(
  //     animatedIndex.value,
  //     [0, 1],
  //     [0, 1],
  //     Extrapolate.CLAMP,
  //   ),
  // }));

  // useEffect(() => {
  //   console.log("animatedIndex => ", animatedIndex.value);
  //   console.log("animatedPosition => ", animatedPosition.value);
  // }, [animatedIndex.value, animatedPosition.value]);

  // const containerStyle = useMemo(
  //   () => [
  //     {
  //       backgroundColor: "#000",
  //       flex: 1,
  //     },
  //     containerAnimatedStyle,
  //   ],
  //   [containerAnimatedStyle],
  // );

  return <CustomBackdrop {...props} />;
};

export default CustomBackdrop;
