import {TextStyle} from 'react-native';

export const Font = {
  Bold: 'DMSans-Bold',
  BoldItalic: 'DMSans-BoldItalic',
  Italic: 'DMSans-Italic',
  Medium: 'DMSans-Medium',
  MediumItalic: 'DMSans-MediumItalic',
  Regular: 'DMSans-Regular',

  FromWeight: (weight: TextStyle['fontWeight']) => {
    switch (weight) {
      case '400':
      case '500':
        return Font.Regular;
      case '600':
      case '700':
        return Font.Medium;
      case '800':
      case '900':
        return Font.Bold;
      default:
        return Font.Regular;
    }
  },
};
