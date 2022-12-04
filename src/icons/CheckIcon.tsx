import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const CheckIcon = ({
  size = 24,
  color = Colors.Secondary.GreyDark,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...rest}>
    <Path
      d="M19.384 5.322a.75.75 0 011.289.76l-.057.096-8.889 12.8a.75.75 0 01-1.074.166l-.08-.071-6.11-6.314a.75.75 0 01.992-1.12l.083.074 5.476 5.662 8.37-12.053z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
