/* index.tsx

  References:
    Authentication/initializing template from ChatGPT
      const { user, initializing } = useAuth(); // Get user data from context
      if (initializing) return <Text>Loading...</Text>; // Show loading until initialized
      if (!user) {
    
*/

import { Text, View, ScrollView, Button, StyleSheet } from "react-native";
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';

import StyledButton from '@/components/StyledButton';
import MenuButton from "@/components/MenuButton";
import SettingsButton from "@/components/SettingsButton";
import JournalButton from "@/components/JournalButton";
import MonthlyProgressButton from "@/components/MonthlyProgressButton";
import reusedStyles from '@/constants/reusedStyles';
import Colors from '@/constants/Colors';

export default function Index() {
    const router = useRouter(); // Hook for navigation
    const { user, initializing } = useAuth(); // Get user data from context
    const [showDropdown, setShowDropdown] = useState(false);

    if (initializing) return <Text>Loading...</Text>; // Show loading until initialized

    const toggleDropdown = () => {
      setShowDropdown((prev) => !prev); // Toggle dropdown visibility
    };

    if (!user) {
        return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 60,
                  padding: 10,
                }}
              >
                <Text>Looks like you're not logged in. Let's fix that!</Text>
                </View>
                <StyledButton
                    text="Log in"
                    onPress={() => {
                        router.push('/login');
                    }}
                />
            </View>
        );
    }
    else {
      console.log("Current user: ", user.email);
      console.log("UID: ", user.uid);

        return (
          <ScrollView
            stickyHeaderIndices={[2]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              backgroundColor: Colors.blue,
              paddingHorizontal: 200,
              paddingBottom: 50
            }}
          >

            <MenuButton style={styles.menuButton} onPress={toggleDropdown} />

              {/* Dropdown Menu */}
              {showDropdown && (
                <View style={styles.dropdown}>
                  <SettingsButton
                    onPress={() => router.push("/settingsPage")}
                    style={styles.dropdownButton}
                  />
                  <JournalButton
                    onPress={() => router.push("/journalPage")}
                    style={styles.dropdownButton}
                  />
                  <MonthlyProgressButton
                    onPress={() => console.log("Monthly Progress Pressed")}
                    style={styles.dropdownButton}
                  />
                </View>
              )}
            <View style={{ height:100, margin: 0, backgroundColor: Colors.blue, alignItems: 'center' }}>
            <StyledButton 
              text="I'm good, let's go!"
              buttonWidth={500}
              onPress={() => router.push('/feelingsWheelPage')} />

            </View>
            <Text style={[styles.tutorialHeader, { fontSize: 30 }]}> The Feelings Wheel </Text>
            <Text style={[styles.tutorialText, { marginHorizontal: 40, marginBottom: 10 }]}> 
              The feelings wheel is a visual tool that helps guide you through identifying what you're feeling.
              We'll start in the middle, where there are more general categories of emotions such as surprised or angry.
              Then we'll move to the middle and outermost sections of the feelings wheel, which have increasingly specific
              emotions.
            </Text>
            <Text style={[styles.tutorialText, { fontWeight:600, marginTop: 0 }]}> 
              If you want to start over, you can click the reset button at the last stage to go back to the beginning.
            </Text>

            <Text style={[styles.tutorialHeader, {  }]}> Mindfulness </Text>
            <Text style={[styles.tutorialText, { marginHorizontal: 40 }]}> 
              Mindfulness is an emotional regulation technique that encourages you to notice sensations within your body,
              helping you to turn your attention from your feelings to your physical self. We'll prompt you to participate in
              exercises like breathing and visualization to help you transition from being caught up in big emotions to
              being more calm and focused. Importantly, though, the goal of mindfulness isn't to take your feelings away -
              you may still be uncomfortable - but to put the emotions in perspective and help regulate your body's functions,
              like your breathing and heart rate.
            </Text>
            <Text style={[styles.tutorialText, { fontWeight:600, marginTop: 0 }]}> 
              You can choose to leave these text boxes blank if you prefer to practice these exercises mentally.
            </Text>

            <Text style={[styles.tutorialHeader, { }]}> Grounding </Text>
            <Text style={[styles.tutorialText, { marginHorizontal: 40 }]}> 
              Grounding is a technique for emotion management that encourages you to observe and connect with the environment
              around you, allowing you to be more present. We'll ask you to notice your surroundings and briefly turn your
              attention to them by thinking about how they stimulate your senses.
            </Text>
            <Text style={[styles.tutorialText, { fontWeight:600, marginTop: 0 }]}> 
              You can choose to leave these text boxes blank if you prefer to practice these exercises mentally.
            </Text>

            <Text style={[styles.tutorialHeader, {  }]}> Gratitude </Text>
            <Text style={[styles.tutorialText, { marginHorizontal: 40 }]}> 
              Practicing gratitude by identifying 3 things you're grateful for each day has been shown to reduce symptoms of
              anxiety and depression over time. We provide three boxes by default to write down three things you're grateful for,
              but you should add more if there's more that you're grateful for! 
              Gratitude helps us find satisfaction in our everyday lives.
            </Text>
            <Text style={[styles.tutorialText, { fontWeight:600, marginTop: 0 }]}> 
              You can choose to leave these text boxes blank if you prefer to practice these exercises mentally.
            </Text>



        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  tutorialHeader: {
    fontSize: 30,
    margin: 30,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  tutorialText: {
    fontSize: 18,
    fontWeight: 400,
    marginVertical: 20,
    marginHorizontal: 50,
    justifyContent: 'center',
    textAlign: 'center',
  },
  menuButton: {
    position: "absolute",
    top: 15,
    left: 15,
    zIndex: 10,
    backgroundColor: Colors.green
  },
  dropdown: {
    position: "absolute",
    top: 70,
    left: 15,
    backgroundColor: Colors.green,
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 5,
  },
  dropdownButton: {
    marginVertical: 5,
   
  }
});
