import React from 'react';
import {Colors} from '../../../Colors';
import {StyleSheet, View} from 'react-native';
import {FontSize, Text} from '../../../components/Text';
import {StatusTag} from '../../../components/StatusTag';
import {Pressable} from '../../../components/Button/Pressable';

interface StationRowProps {
  onPress: () => void;
  fs: FillingStation;
}

export const StationRow = ({onPress, fs}: StationRowProps) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <View style={styles.subRowContainer}>
        <View style={styles.leftColumnContainer}>
          <View>
            <Text fontSize={FontSize.H3}>{fs.stationName}</Text>
            <Text>{fs.address}</Text>
          </View>
          {fs.scheduleDelivery?.scheduledDate && (
            <View>
              <Text numberOfLines={2}>Estimate Fuel arrival: </Text>
              <Text fontSize={FontSize.H5}>
                {fs.scheduleDelivery?.scheduledDate}
              </Text>
            </View>
          )}
        </View>
        <View>
          <StatusTag status={fs.SDStatus} />
          {fs.scheduleDelivery?.queueNumber && (
            <View style={styles.queueContainer}>
              <Text fontSize={FontSize.H3}>
                {fs.scheduleDelivery?.queueNumber}
              </Text>
              <Text>on going</Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.Secondary.GreyOff,
    borderRadius: 16,
    paddingVertical: 16,
    marginHorizontal: 24,
    paddingHorizontal: 8,
  },
  subRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumnContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  dateContainer: {
    flexDirection: 'row',
    marginTop: 4,
    alignContent: 'center',
    alignItems: 'center',
  },
  queueContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
});
