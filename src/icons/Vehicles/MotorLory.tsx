import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../../Colors';

export const MotorLory = ({
  size = 24,
  color = Colors.Secondary.GreyDark,
  ...rest
}: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 12"
    {...rest}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.47 11.839a2.625 2.625 0 1 0 5.184 0h4.51a2.88 2.88 0 0 0-.024.38 2.66 2.66 0 1 0 5.28-.474A1.628 1.628 0 0 0 25 10.132v-5.22L21.69 1.35h-4.535v7.908H.879a.665.665 0 0 0-.676.645v1.286a.665.665 0 0 0 .674.65h.738c-.021.135-.032.271-.032.408a2.624 2.624 0 1 0 5.247 0c-.001-.136-.012-.272-.033-.407H8.47v-.002ZM15.56 0H.834A.838.838 0 0 0 0 .834V8.6h16.394V.834A.836.836 0 0 0 15.56 0ZM3.196 12.26c0 1.329 2.018 1.329 2.018 0 0-1.424-2.018-1.276-2.018 0Zm16.58-.043c0 1.345 2.046 1.345 2.046 0s-2.047-1.353-2.047 0Zm1.898-9.328 1.67 1.994v.724h-4.527V2.89h2.857Zm-11.62 9.37c0 1.33 2.019 1.33 2.019 0 0-1.328-2.018-1.326-2.018 0Z"
      fill={color}
    />
  </Svg>
);
