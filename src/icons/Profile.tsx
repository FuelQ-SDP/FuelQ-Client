import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const Profile = ({
  size = 24,
  color = Colors.Primary.Navy,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 25 25" {...rest}>
    <Path
      d="M12.5 14.063a7.033 7.033 0 0 0 7.031-7.032A7.033 7.033 0 0 0 12.5 0a7.033 7.033 0 0 0-7.031 7.031 7.033 7.033 0 0 0 7.031 7.032Zm6.25 1.562h-2.69a8.51 8.51 0 0 1-7.12 0H6.25A6.25 6.25 0 0 0 0 21.875v.781A2.344 2.344 0 0 0 2.344 25h20.312A2.344 2.344 0 0 0 25 22.656v-.781a6.25 6.25 0 0 0-6.25-6.25Z"
      stroke={color}
    />
  </Svg>
);
