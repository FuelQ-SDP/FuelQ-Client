import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const Edit = ({
  size = 24,
  color = Colors.Primary.Navy,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...rest}>
    <Path
      d="M11.77 21.617c5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10s-10 4.477-10 10c0 5.522 4.477 10 10 10ZM11.77 15.617v-4M11.77 7.617h.01"
      fill={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
