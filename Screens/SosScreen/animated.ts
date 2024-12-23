import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from "react-native-reanimated";

const SIZE = 150.0;

export const useSOSAnimation = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        { scale: scale.value },
        { rotate: `${progress.value * 2 * Math.PI}rad` },
      ],
    };
  }, []);

  const startAnimation = () => {
    progress.value = withRepeat(
      withSpring(0.5, { damping: 7, stiffness: 50 }),
      2,
      true
    );
    scale.value = withRepeat(
      withSpring(1, { damping: 7, stiffness: 50 }),
      3,
      true
    );
  };

  return { reanimatedStyle, startAnimation };
};
