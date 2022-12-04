import React, {FC, PropsWithChildren} from 'react';
import {
  KeyboardAwareScrollView as KAScrollView,
  KeyboardAwareScrollViewProps as KAScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

export const KeyboardAwareScrollView: FC<
  PropsWithChildren<KAScrollViewProps>
> = ({children, ...rest}) => (
  <KAScrollView enableResetScrollToCoords={false} {...rest}>
    {children}
  </KAScrollView>
);
