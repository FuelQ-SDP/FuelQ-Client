import * as React from 'react';
import Svg, {Defs, Path, Use} from 'react-native-svg';

import {Colors} from '../Colors';

export const HomeIcon = ({
  size = 24,
  color = Colors.Primary.Navy,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...rest}>
    <Defs>
      <Path
        d="M5 23a3 3 0 01-3-3V9a1 1 0 01.386-.79l9-7a1 1 0 011.228 0l9 7A1 1 0 0122 9v11a3 3 0 01-3 3H5zm7-19.733L4 9.489V20a1 1 0 001 1h3v-9a1 1 0 01.883-.993L9 11h6a1 1 0 011 1v9h3a1 1 0 001-1V9.49l-8-6.223zM14 13h-4v8h4v-8z"
        id="prefix__a"
      />
    </Defs>
    <Use fill={color} fillRule="nonzero" xlinkHref="#prefix__a" />
  </Svg>
);
