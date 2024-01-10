import { useColorScheme } from 'react-native';
import { ColourMap } from '@/common/theme/ColourMap';

export function useColours(
) {
  const colourScheme = useColorScheme();
  // @ts-ignore
  return ColourMap.get(colourScheme);
}
