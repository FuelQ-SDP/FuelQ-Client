import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const PhoneIcon = ({
  size = 24,
  color = Colors.Primary.Navy,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 25 25" {...rest}>
    <Path
      d="m24.287 17.666-5.47-2.344a1.173 1.173 0 0 0-1.366.337l-2.422 2.959a18.099 18.099 0 0 1-8.652-8.652l2.959-2.422a1.169 1.169 0 0 0 .337-1.367L7.329.708A1.18 1.18 0 0 0 5.986.03L.908 1.201A1.172 1.172 0 0 0 0 2.343C0 14.868 10.151 25 22.656 25a1.173 1.173 0 0 0 1.143-.909l1.172-5.078a1.186 1.186 0 0 0-.684-1.347Z"
      fill={color}
    />
  </Svg>
);
