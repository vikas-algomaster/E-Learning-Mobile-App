import {
  JosefinSans_400Regular,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_500Medium,
  useFonts,
} from "@expo-google-fonts/josefin-sans";

export const useJosefinFont = () => {
  return useFonts({
    JosefinSans_400Regular,
    JosefinSans_600SemiBold,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
  });
};
