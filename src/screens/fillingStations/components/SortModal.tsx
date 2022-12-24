import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../Colors';
import {BottomModal} from '../../../components/BottomModal';
import {Pressable} from '../../../components/Button/Pressable';
import {FontSize, Text} from '../../../components/Text';
import {XIcon} from '../../../icons/XIcon';

interface SortModalProps {
  show: boolean;
  onClose: () => void;
}

export const SortModalModal = ({show, onClose}: SortModalProps) => {
  return (
    <>
      <BottomModal
        show={show}
        onClose={() => {
          onClose();
        }}>
        <View
          style={{
            margin: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text fontSize={FontSize.H2}>Filter & Sorting</Text>
            <Pressable
              style={{
                backgroundColor: Colors.Label.OffBlue,
                height: 50,
                width: 50,
                borderRadius: 25,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <XIcon color={Colors.Primary.Blue} />
            </Pressable>
          </View>
          <Text fontSize={FontSize.H3}>Distance </Text>
          <Text fontSize={FontSize.H3}>Availability </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Pressable
              onPress={() => {}}
              style={{
                height: 50,
                borderRadius: 25,
                backgroundColor: Colors.Label.OffRed,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}></Pressable>
            <Pressable
              onPress={() => {}}
              style={{
                height: 50,
                borderRadius: 25,
                backgroundColor: Colors.Label.OffRed,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}></Pressable>
          </View>
        </View>
      </BottomModal>
    </>
  );
};
