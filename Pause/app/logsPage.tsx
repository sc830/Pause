import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import MenuButton from '@/components/MenuButton';
import DateButton from '@/components/DateButton';

// Uncomment and configure these imports when Firebase is connected
// import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
// const db = getFirestore();

export default function LogsPage() {
  const [dates, setDates] = useState<string[]>([]); // Store dates
  const [activities, setActivities] = useState<any[]>([]); // Store activities for selected date

  // Uncomment this useEffect when Firebase is ready
  /*
  useEffect(() => {
    const fetchDates = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'userActivity'));
        const fetchedDates: string[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.timestamp) {
            const date = new Date(data.timestamp.toDate()); // Convert Firestore Timestamp
            const formattedDate = date.toISOString().split('T')[0]; // Format to YYYY-MM-DD
            if (!fetchedDates.includes(formattedDate)) {
              fetchedDates.push(formattedDate);
            }
          }
        });
        setDates(fetchedDates);
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };

    fetchDates();
  }, []);
  */

  // Example: Save a new session to Firestore (Uncomment and use when Firebase is ready)
  /*
  const saveSession = async () => {
    try {
      await addDoc(collection(db, 'userActivity'), {
        details: 'User completed an activity.',
        timestamp: serverTimestamp(), // Automatically set the date/time
      });
      console.log('Session saved!');
    } catch (error) {
      console.error('Error saving session:', error);
    }
  };
  */

  // Temporary placeholder dates for testing until Firebase is connected
  useEffect(() => {
    const placeholderDates = ['2024-11-19', '2024-11-20', '2024-11-21'];
    setDates(placeholderDates);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Choose A Date to View Past Responses:</Text>
      <MenuButton style={styles.menuButton} onPress={() => console.log('Menu Pressed')} />

      {/* Render Date Buttons */}
      <FlatList
        data={dates}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <DateButton
            date={item}
            onPress={() => console.log(`View activities for ${item}`)}
            style={styles.dateButton}
          />
        )}
        contentContainerStyle={styles.dateButtonList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  dateButtonList: {
    marginTop: -90,
    width: '100%',
    alignItems: 'center',
  },

  dateButton: {
    marginVertical: 10,
    width: '100%', 
    alignSelf: 'center', 
  },
});
