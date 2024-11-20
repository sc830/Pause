import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import MenuButton from '@/components/MenuButton';
import DateButton from '@/components/DateButton';

const db = getFirestore();

export default function LogsPage() {
  const [dates, setDates] = useState<string[]>([]); // Store dates
  const [activities, setActivities] = useState<any[]>([]); // Store activities for selected date

  // Fetch dates from Firestore on load
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

  // Example: Save a new session to Firestore (triggered manually here)
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
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
  },
});
