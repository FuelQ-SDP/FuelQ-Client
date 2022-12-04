import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Styles} from '../Styles';
import {Colors} from '../Colors';

export interface BottomModalProps {
  show: boolean;
  onClose: () => void;
  children?: JSX.Element;
}

export const BottomModal = ({show, onClose, children}: BottomModalProps) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const {bottom} = useSafeAreaInsets();
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  useEffect(() => {
    if (show) {
      bottomSheetRef.current?.present();
    } else {
      bottomSheetRef.current?.dismiss();
    }
  }, [show]);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.1}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior={'close'}
        enableTouchThrough={false}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      enablePanDownToClose={true}
      style={Styles.shadowDefault}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      backdropComponent={renderBackdrop}
      onDismiss={onClose}
      handleIndicatorStyle={styles.bottomHandleIndicator}>
      <BottomSheetView
        style={{
          paddingBottom: bottom,
        }}
        onLayout={handleContentLayout}>
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  bottomHandleIndicator: {
    opacity: Platform.OS === 'android' ? 0 : 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  buttonSeparator: {
    width: 24,
  },
  wishButton: {
    backgroundColor: Colors.Secondary.Red,
  },

  buyButton: {
    backgroundColor: Colors.Secondary.Green,
  },
});
