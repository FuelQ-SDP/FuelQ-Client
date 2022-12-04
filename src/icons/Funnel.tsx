import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const FunnelIcons = ({
  size = 24,
  color = Colors.Primary.Navy,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 25 30" {...rest}>
    <Path
      d="M15.709 17.061a.5.5 0 0 0-.084.278v8.915a.5.5 0 0 1-.276.447l-5.25 2.625a.5.5 0 0 1-.724-.448v-11.54a.5.5 0 0 0-.084-.277L.084 3.251A.5.5 0 0 1 0 2.974V.5A.5.5 0 0 1 .5 0h24a.5.5 0 0 1 .5.5v2.474a.5.5 0 0 1-.084.277l-9.207 13.81ZM4.691 3.125a.5.5 0 0 0-.417.777l7.81 11.715a.5.5 0 0 0 .832 0l7.81-11.715a.5.5 0 0 0-.416-.777H4.69Z"
      fill={color}
    />
  </Svg>
);
