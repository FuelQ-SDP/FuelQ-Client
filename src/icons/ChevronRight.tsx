import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const ChevronRightIcon = ({
  size = 24,
  color = Colors.Primary.Navy,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...rest}>
    <Path
      d="M7.436 4.506a.75.75 0 01.97-.137l.088.067 7.146 6.253c.254.221.403.536.403.873 0 .295-.114.574-.312.787l-.09.087-7.147 6.253a.75.75 0 01-1.066-1.05l.078-.078 6.855-5.999-6.855-5.998a.75.75 0 01-.137-.97l.067-.088z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
