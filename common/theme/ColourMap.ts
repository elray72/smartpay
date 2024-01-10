import { ColorSchemeName } from 'react-native';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum Colour {
  Primary100 = '#f0fCff',
  Primary200 = '#97edff',
  Primary300 = '#6ae4fd',
  Primary400 = '#73c4da',
  Primary500 = '#2fa2b9',
  Secondary100 = '#fff8f7',
  Secondary200 = '#fff1ee',
  Secondary300 = '#ffe3dd',
  Secondary400 = '#ffcec4',
  Secondary500 = '#ffb9aa',
  Grey50 = '#f9fafb',
  Grey100 = '#f3f4f6',
  Grey200 = '#e5e7eb',
  Grey300 = '#d1d5db',
  Grey400 = '#9ca3af',
  Grey500 = '#6b7280',
  Grey600 = '#4b5563',
  Grey700 = '#374151',
  Grey800 = '#1d2734',
  Grey900 = '#111827',
  Pink = '#f092ad',
  Teal = '#55bbc5',
  Blue = '#5fa8ee',
  Orange= '#fb923c',
  Purple = '#ab92f0',
  Success = '#4ade80',
  SuccessLight = '#86efac',
  SuccessDark = '#22c55e',
  Warning = '#facc15',
  WarningLight = '#fde047',
  WarningDark = '#eaB308',
  Danger = '#f75555',
  DangerLight = '#fCa5a5',
  DangerDark = '#ef4444',
  Info = '#17a2b8',
  InfoLight = '#e2f3f8',
  InfoDark = '#0f707E',
  White = '#fff',
  Black = '#000',
  Transparent= 'transparent',
}

export const ColourMap= new Map<Theme, {[key: string]: Colour}>([
  [Theme.Dark, {
    Background: Colour.Grey900,
    Border: Colour.Grey700,
    BtnPrimaryBg: Colour.Grey900,
    BtnPrimaryText: Colour.White,
    BtnSecondaryBg: Colour.Grey50,
    BtnSecondaryText: Colour.Grey900,
    Checkbox: Colour.Grey700, //
    CheckboxHover: Colour.Grey700, //
    CheckboxActive: Colour.Grey700, //
    CheckboxChecked: Colour.Primary400,//
    CheckboxCheckedHover: Colour.Primary400,//
    CheckboxCheckedActive: Colour.Primary400,//
    CheckboxDisabled: Colour.Grey700, //
    Link: Colour.Primary400,
    LinkHover: Colour.Primary500,
    IconPrimary: Colour.Primary400,
    IconLight: Colour.Grey600,
    IconMedium: Colour.Grey500,
    IconDark: Colour.White,
    InputBg: Colour.Grey800,
    InputBorder: Colour.Grey800,
    InputBorderActive: Colour.Grey50,
    InputIcon: Colour.White,
    InputClearIcon: Colour.Grey500,//
    InputText: Colour.Grey400,
    InputTextActive: Colour.Grey50,
    TextLight: Colour.Grey500,
    TextMedium: Colour.Grey400,
    TextDark: Colour.Grey50,
    TextEmphasis: Colour.Primary400,
    NavIcon: Colour.Primary400,
    NavIconActive: Colour.White,
    NavIconCta: Colour.White,
    NavIconCtaBg: Colour.Primary400,
    Toggle: Colour.Grey700, //
    ToggleActive: Colour.Primary400,//
    ToggleHover: Colour.Primary400,//
    ToggleDisabled: Colour.Grey700, //
    ToggleOn: Colour.Grey700, //
    ToggleOnActive: Colour.Primary400,//
    ToggleOnHover: Colour.Primary400,//
  }],
]);

export default Colour;
