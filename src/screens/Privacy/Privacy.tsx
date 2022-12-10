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

type NavigationProps = StackNavigationProp<HomeStackParamList, 'Home'>;

export const Privacy = () => {
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
          content={`**Last updated: September 30, 2022**  
          ### FuelQ Privacy Policy
          **Why and for whom?** 
          At FuelQ ("FuelQ", "we", "us", " our") we care about personal privacy. This means that we respect and protect your privacy and the right to control and transparency in the processing of your Personal Data. FuelQ is the Data Controller in relation to the Processing of Personal Data listed in this Privacy Policy (the "Policy "). The policy describes the purposes for which we need your Personal Data, the legal basis we rely on and the measures we take to protect personal data. We also inform you of how you can exercise the rights you have linked to our processing of your Personal Data. We will also list our Personal Data Assistants so that you can feel 100% sure where your Personal Data is stored and Processed. The policy informs about our handling of Personal Data in cases where you communicate with us, use The service or visiting our website (together "Functions"). 
          **This policy is aimed at:** 
          * Users of the Service * Visitors to our website **Definitions** "Processing" of Personal Data is everything that can be done with a Personal Data, e.g. storage, modification, reading, transmission, etc. "Governing law" is the legislation applicable to the processing of Personal Data including the General Data Protection Regulation (GDPR), supplementary national legislation, as well as practice, guidance and recommendations issued by a national or European supervisory authority. "Personal data" is any kind of information that can be linked to an identifiable, living person.
                    "Personal data controller" is the company/organization that decides for which purposes and in what way the Personal Data is to be processed and is thus also responsible for Personal Data being processed in accordance with Applicable Law. "Personal data assistant" is the company/organization that processes Personal Data on behalf of the Personal Data Controller and may therefore only Process the Personal Data in accordance with the Personal Data Controller's instructions and current legislation. "Registered" means the living, natural person whose Personal Data is processed. The "service" FuelQ, the modern app for pregnancy & toddler years.. **FuelQ personal data responsibility** The information in this Policy covers the Processing of Personal Data for which FuelQ is the Personal Data Controller, i.e. the Treatments for which we determine the purpose of (why a treatment is done) and means for (in what way, which personal data, for how long, etc.). The policy does not describe how we process personal data in the role of Personal Data Officer - i.e. when we process personal data on behalf of our customers. FuelQ's business area is to create and run a mobile application with a focus on pregnancy & toddler years. In order to optimize the FuelQ App, we need to collect data from our users. We process your data mainly for the following purposes: to administer your account, make available and provide the application and integrate the application with third-party services, as well as improve your experience with the application and make it more tailored and relevant. **FuelQ processing of personal data** We have a responsibility to describe and show how we live up to the requirements placed on us when we process your Personal Data. This section aims to inform about: * Why the Personal Data Processing is necessary in relation to the purpose * What legal basis we have identified for the Processing **Legal Basis** Consent - FuelQ processes your Personal Data after we have received your consent to the Processing. Information about the treatment is always provided in connection with asking for consent. **How ​​long do we save your Personal Data?** We save your Personal Data for as long as is necessary with regard to the purpose for which it was collected. Depending on the legal basis on which we support the processing, this may a) result from an agreement, b) depend on a valid consent, c) appear from legislation or d) result from an internal assessment based on a balancing of interests.`}
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