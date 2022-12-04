import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const ArrowLeft = ({
  size = 24,
  color = Colors.Secondary.GreyDark,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 10 16" {...rest}>
    <Path
      d="M2.6 8.207a1 1 0 0 1 0-1.414l4.585-4.586A1 1 0 0 0 5.77.793L1.189 5.379a3 3 0 0 0 0 4.242l4.586 4.586a1 1 0 0 0 1.414-1.414l-4.59-4.586Z"
      fill={color}
    />
  </Svg>
);
