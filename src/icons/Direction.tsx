import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const DirectionIcon = ({
  size = 24,
  color = Colors.Primary.Navy,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 25 25" {...rest}>
    <Path
      d="M21.705.172 1.403 9.542c-2.342 1.093-1.562 4.529.937 4.529h8.59v8.59c0 2.498 3.435 3.279 4.528.936l9.37-20.302c.781-1.874-1.25-3.904-3.123-3.123Z"
      fill={color}
    />
  </Svg>
);
