import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Linking, Platform, ScrollView, StyleSheet, View} from 'react-native';
import {getVersion, getBuildNumber} from 'react-native-device-info';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../Colors';
import {Block} from '../../components/Button/Block';
import {Header} from '../../components/Header';
import {RenderMarkdown} from '../../components/RenderMarkdown';
import {useUser} from '../../context/User';
import {createSupportMailToLink} from '../../helpers/support';
import {ArrowLeft} from '../../icons/ArrowLeft';
import {HomeStackParamList} from '../../navigators/Home';

type NavigationProps = StackNavigationProp<HomeStackParamList, 'Support'>;

export const Support = () => {
  const {user} = useUser();
  const {bottom} = useSafeAreaInsets();
  const {goBack} = useNavigation<NavigationProps>();

  const createSupportMail = async () => {
    const version = getVersion();
    const buildNumber = getBuildNumber();

    const OSName = Platform.OS;
    const OSVersion = Platform.Version;

    const link = createSupportMailToLink(
      user?.id,
      user!.id,
      version,
      buildNumber,
      OSName,
      OSVersion,
    );

    Linking.openURL(link);
  };

  const paddingBottom = bottom > 0 ? bottom : 16;

  return (
    <View style={styles.root}>
      <Header title={'Support'} leftIcon={<ArrowLeft />} onPressLeft={goBack} />
      <ScrollView contentContainerStyle={styles.container}>
        <RenderMarkdown
          content={`The system aims to deliver an enhanced web and mobile based fuel requesting and queue management system organized for maximum productivity and excellent service by reforming the traditional process in a way that utilizes technology. The government is had a difficult time coping as Sri Lanka's economic nightmare persists and the country's fuel supply is decreasing. The government has implemented rigorous nationwide energy-saving measures while it looks for other sources of energy as fuel shortages affect the nation. In order to demand petrol and fuel, protesters have blocked major thoroughfares, and television stations have shown people fighting in some neighbourhoods over scarce supplies. People wait for fuel for days. Therefore, by implementing a "FuelQ" all of these pressing issues may be managed and resolved. Do you have any questions or have you discovered an error in our content? Contact our support or get in touch with us by emailing`}
        />
      </ScrollView>

      <View style={[styles.button, {paddingBottom}]}>
        <Block onPress={createSupportMail}>Contact support</Block>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Primary.White,
  },

  button: {
    flexDirection: 'row',
    backgroundColor: Colors.Primary.White,
    padding: 16,
  },

  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
});
