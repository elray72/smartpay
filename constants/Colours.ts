interface IColor {
  Primary100: string;
  Primary200: string;
  Primary300: string;
  Primary400: string;
  Primary500: string;
  Secondary100: string;
  Secondary200: string;
  Secondary300: string;
  Secondary400: string;
  Secondary500: string;
  Grey50: string;
  Grey100: string;
  Grey200: string;
  Grey300: string;
  Grey400: string;
  Grey500: string;
  Grey600: string;
  Grey700: string;
  Grey800: string;
  Grey900: string;
  Pink: string;
  Teal: string;
  Blue: string;
  Orange: string;
  Purple: string;
  Success: string;
  SuccessLight: string;
  SuccessDark: string;
  Warning: string;
  WarningLight: string;
  WarningDark: string;
  Danger: string;
  DangerLight: string;
  DangerDark: string;
  Info: string;
  InfoLight: string;
  InfoDark: string;
  White: string;
  Black: string;
  Transparent: string;
}

interface IElemColor {
  Background: 'background',
  TextLight: 'text-light',
  TextMedium: 'text-medium',
  TextDark: 'text-dark',
  BtnPrimary: 'btn-primary',
}

export enum ColorTheme {
  Light = 'light',
  Dark = 'dark',
}

export const ColorElem = {
  Background: 'background',
  TextLight: 'text-light',
  TextMedium: 'text-medium',
  TextDark: 'text-dark',
  BtnPrimary: 'btn-primary',
}


export const Color = {
  Primary100: '#f0fCff',
  Primary200: '#97edff',
  Primary300: '#6ae4fd',
  Primary400: '#73c4da',
  Primary500: '#2fa2b9',
  Secondary100: '#fff8f7',
  Secondary200: '#fff1ee',
  Secondary300: '#ffe3dd',
  Secondary400: '#ffcec4',
  Secondary500: '#ffb9aa',
  Grey50: '#F9FAFB',
  Grey100: '#f3f4f6',
  Grey200: '#e5e7eb',
  Grey300: '#d1d5db',
  Grey400: '#9ca3af',
  Grey500: '#6b7280',
  Grey600: '#4b5563',
  Grey700: '#374151',
  Grey800: '#1d2734',
  Grey900: '#111827',
  Pink: '#f092ad',
  Teal: '#55bbc5',
  Blue: '#5fa8ee',
  Orange: '#fb923c',
  Purple: '#ab92f0',
  Success: '#4ade80',
  SuccessLight: '#86efac',
  SuccessDark: '#22c55e',
  Warning: '#facc15',
  WarningLight: '#fde047',
  WarningDark: '#eaB308',
  Danger: '#f75555',
  DangerLight: '#fCa5a5',
  DangerDark: '#ef4444',
  Info: '#17a2b8',
  InfoLight: '#e2f3f8',
  InfoDark: '#0f707E',
  White: '#fff',
  Black: '#000',
  Transparent: 'transparent',
}

interface IColorScheme {
  [ColorTheme.Light]: IColor;
  [ColorTheme.Dark]: IColor;
}

const ColourThemeLegacy = {
  [ColorTheme.Light]: {
  // //   [ColorName.Primary]: '#2f95dc',
  // //   [ColorName.Secondary]: '#ff6347',
  //   [ColorName.Success]: Color.Success,
  //   [ColorName.Warning]: '#ffc107',
  //   [ColorName.Danger]: '#dc3545',
  //   [ColorName.Info]: '#17a2b8',
  //   [ColorName.White]: '#fff',
  //   [ColorName.Black]: '#000',
  //   [ColorName.Transparent]: 'transparent',
  //   // [ColorName.Background]: '#fff',
  //   // [ColorName.TabIconDefault]: '#ccc',
  //   // [ColorName.TabIconSelected]: tintColorLight,
  //   // [ColorName.Text]: '#000',
  //   // [ColorName.Tint]: tintColorLight,
  },
  [ColorTheme.Dark]: {
    // // [ColorName.Primary]: '#2f95dc',
    // // [ColorName.Secondary]: '#ff6347',
    // [ColorName.Success]: '#28a745',
    // [ColorName.Warning]: '#ffc107',
    // [ColorName.Danger]: '#dc3545',
    // [ColorName.Info]: '#17a2b8',
    // [ColorName.White]: '#fff',
    // [ColorName.Black]: '#000',
    // [ColorName.Transparent]: 'transparent',
    // // [ColorName.Background]: '#111827',
    // // [ColorName.TabIconDefault]: '#ccc',
    // // [ColorName.TabIconSelected]: tintColorDark,
    // // [ColorName.Text]: '#fff',
    // // [ColorName.Tint]: tintColorDark,
  },
};

export default ColourThemeLegacy;

