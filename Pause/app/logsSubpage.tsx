//https://devbrite.io/firestore-react-native
//https://rnfirebase.io/
// https://rnfirebase.io/firestore/usage

import { Text, ScrollView } from "react-native";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import ContinueButton from '@/components/ContinueButton';
import TitleBar from '@/components/TitleBar';
import TextBox from '@/components/TextBox';

import { colors, reusedStyles, values } from '@/constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function logsInfo() {

  const userLogs = firestore().collection('users').doc('exampleUser')

  const readDataFromFirestore = async (collection) => {
    try {
      const ref = collection.firestore().collection(collection)
      const response = await ref.get()
      return response
    } catch (error) {
      return error
    }
  }

  return (
    <SafeAreaProvider>
      <TitleBar title='Header'/>
        <ScrollView>
        </ScrollView>
      <ContinueButton/>
    </SafeAreaProvider>
  );

  
}
