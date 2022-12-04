import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ReactNativeFirebase} from '@react-native-firebase/app';
import {UserService} from '../services/UserService';

type State = {
  loading: boolean;
  isAuthenticated: boolean;
  signInWithPhoneNumber: (phoneNumber: string) => Promise<any>;
  confirmCode: (code: string) => Promise<any>;
};

export const AuthContext = createContext<State>({
  loading: true,
  isAuthenticated: false,
  signInWithPhoneNumber: async () => {},
  confirmCode: async () => {},
});

export const useAuthContext = () => useContext(AuthContext);

interface Props {
  children: any;
}

export const AuthProvider = ({children}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  useEffect(() => {
    // auth().currentUser();
    console.log('auth', auth().currentUser?.phoneNumber);
    const subscriber = auth().onAuthStateChanged(() => {});
    return subscriber; // unsubscribe on unmount
  }, []);

  const signInWithPhoneNumber = useCallback(async (phoneNumber: string) => {
    return new Promise<void>((resolve, reject) => {
      auth()
        .signInWithPhoneNumber(phoneNumber.replace('0', '+94'))
        .then((_confirm: FirebaseAuthTypes.ConfirmationResult) => {
          setConfirm(_confirm);
          resolve();
        })
        .catch((e: ReactNativeFirebase.NativeFirebaseError) => {
          console.log('signInWithPhoneNumber had Following error', e.code);
          switch (e.code) {
            case 'auth/user-disabled':
              reject('Your Account Has been disabled');
              break;
            case 'auth/quota-exceeded':
              reject('Please Try again');
              break;
            case 'auth/invalid-phone-number':
            case 'auth/missing-phone-number':
              reject('Please check the Phone Number and try again');
              break;
          }
        });
    });
  }, []);

  const confirmCode = useCallback(
    async (code: string) => {
      return new Promise<void>((resolve, reject) => {
        if (confirm) {
          confirm.confirm(code).then(_userCredential => {
            if (_userCredential) {
              UserService.getUser(_userCredential.user.uid).then(_user => {
                return resolve(_user);
              });
            }
          });
          // {"additionalUserInfo": {"isNewUser": false, "profile": null, "providerId": "phone", "username": null},
          // "user": {"displayName": null, "email": null, "emailVerified": false, "isAnonymous": false, "metadata": [Object], "multiFactor": [Object], "phoneNumber": "+94772722210", "photoURL": null, "providerData": [Array], "providerId": "firebase", "refreshToken": "AOkPPWRvCiQZBMyXNTMNIDTY1tD2wXe4GIqvALK0wba_GtkmgfA4I5rVwRm_Em3eH0RYQLimUk-qCU7x9yRQIuM_ZQph_YVjyAxPIENKg7WxO2cznYqqcjpR4oTgkYwCvm8N1hy2J8To8c8dDIhf-iomjmU7gT57p__A1Jic-7-zOhI-Zk0d_pU", "tenantId": null, "uid": "sqWdbB53PEbKRW4KGFahOPF5oCZ2"}}
          // console.log('te', te);
        }
      });
    },
    [confirm],
  );

  const values = useMemo(
    () => ({isAuthenticated, loading, signInWithPhoneNumber, confirmCode}),
    [isAuthenticated, loading, signInWithPhoneNumber, confirmCode],
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthentication = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthentication must be used within an AuthProvider');
  }
  return context;
};
