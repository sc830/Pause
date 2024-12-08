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
import Values from '@/constants/Values';

export default function Index() {
    const router = useRouter(); // Hook for navigation
    const { user, initializing } = useAuth(); // Get user data from context
    const [showDropdown, setShowDropdown] = useState(false);

    if (initializing) return <Text>Loading...</Text>; // Show loading until initialized

    const toggleDropdown = () => {
      setShowDropdown((prev) => !prev); // Toggle dropdown visibility
    };

    const handleContinue = () => {
      if (user) {
        router.push('/feelingsWheelPage');
      } else {
        router.push('/login');
      }
    };

    return (
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: Colors.blue,
          paddingBottom: 50,
          marginTop: -70
        }}
      >
        <View style={{ height:100, margin: 0, flexDirection:'row' }}>
            <View style = {{alignSelf: 'flex-start', margin:10}}>
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
              </View>
              <View style = {{alignSelf: 'flex-end', flex:1, alignItems: 'flex-end',justifyContent:'flex-end'}}>
                  <StyledButton 
                    text="I'm ready"
                    buttonWidth={200}
                    onPress={handleContinue} />
              </View>
        </View>
        <View style={{ paddingHorizontal: 200 }}>
            <View style={styles.tutorialHeadingContainer}>
              <Text style={[styles.tutorialHeading, { }]}> Welcome to Pause! </Text>
            </View>
            <Text style={[styles.tutorialText, { marginHorizontal: 40, marginBottom: 0 }]}> 
                Pause is an application designed to help you learn healthy habits for emotional regulation 
                through research-backed methods.
            </Text>
            <Text style={[styles.tutorialText, { marginHorizontal: 40, marginTop:0, marginBottom: 10 }]}> 
              We'll walk you through the process, and eventually you'll be able to do it it on your own!
            </Text>  
            <Text style={[styles.tutorialText, { fontWeight:600, marginTop: 0, marginBottom: 50 }]}> 
              First time here? Don't worry, we'll explain how everything works.
            </Text> 
            <View style={styles.tutorialHeadingContainer}>
              <Text style={[styles.tutorialHeading, { }]}> How does the app work? </Text>
            </View>
            <Text style={[styles.tutorialSubHeading, { }]}> The Process </Text>
            <Text style={[styles.tutorialText, { marginHorizontal: 40, marginBottom: 10 }]}> 
              Pause uses a "check-in process" consisting of four parts to help you identify your feelings and practice healthy
              regulation strategies. You can always navigate to the previous page if you want to change your answers or revisit an
              activity. More information about each technique can be found in "The Check-In Process" section below.
            </Text>
            <Text style={[styles.tutorialSubHeading, { }]}> Pause Timer </Text>
            <Text style={[styles.tutorialText, { marginHorizontal: 40, marginBottom: 10 }]}> 
              Pause uses a timer countdown on each page to encourage you to take it slow and be thoughtful
              during each exercise. In the app settings, which you can access from the dropdown menu on the 
              left of this page or after you've finished the check-in process, you can choose to manually
              change the length of the timer (the minimum is 20 seconds) or use our variable timer feature, which automatically adjusts
              the "pause" to suit the emotion you select and how long it takes you to identify how you're feeling. You can also choose
              whether or not the timer is visible during the check-in. You can always change the timer settings later, but they can't be 
              changed in the middle of a check-in. This can help you slow down when you most need it.
            </Text>
            <Text style={[styles.tutorialText, { fontWeight:600, marginTop: 0, marginBottom: 50 }]}> 
              To adjust the timer settings before you start, click on the menu button in the top left corner of the screen  to reach the app settings.
            </Text>
            <View style={styles.tutorialHeadingContainer}>
              <Text style={[styles.tutorialHeading, { }]}> The Check-In Process </Text>
            </View>
            <Text style={[styles.tutorialSubHeading, { }]}> The Feelings Wheel </Text>
            <Text style={[styles.tutorialText, { marginHorizontal: 40, marginBottom: 10 }]}> 
              The feelings wheel is a visual tool that helps guide you through identifying what you're feeling.
              We'll start in the middle, where there are more general categories of emotions such as surprised or angry.
              Then we'll move to the middle and outermost sections of the feelings wheel, which have increasingly specific
              emotions.
            </Text>
            <Text style={[styles.tutorialText, { fontWeight:600, marginTop: 0 }]}> 
              If you want to start over, you can click the reset button at the last stage to go back to the beginning.
            </Text>

            <Text style={[styles.tutorialSubHeading, {  }]}> Mindfulness </Text>
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

            <Text style={[styles.tutorialSubHeading, { }]}> Grounding </Text>
            <Text style={[styles.tutorialText, { marginHorizontal: 40 }]}> 
              Grounding is a technique for emotion management that encourages you to observe and connect with the environment
              around you, allowing you to be more present. We'll ask you to notice your surroundings and briefly turn your
              attention to them by thinking about how they stimulate your senses.
            </Text>
            <Text style={[styles.tutorialText, { fontWeight:600, marginTop: 0 }]}> 
              You can choose to leave these text boxes blank if you prefer to practice these exercises mentally.
            </Text>

            <Text style={[styles.tutorialSubHeading, {  }]}> Gratitude </Text>
            <Text style={[styles.tutorialText, { marginHorizontal: 40 }]}> 
              Practicing gratitude by identifying 3 things you're grateful for each day has been shown to reduce symptoms of
              anxiety and depression over time. We provide three boxes by default to write down three things you're grateful for,
              but you should add more if there's more that you're grateful for! 
              Gratitude helps us find satisfaction in our everyday lives.
            </Text>
            <Text style={[styles.tutorialText, { fontWeight:600, marginTop: 0 }]}> 
              You can choose to leave these text boxes blank if you prefer to practice these exercises mentally.
            </Text>

            <Text style={[styles.tutorialSubHeading, {  }]}> Journaling </Text>
            <Text style={[styles.tutorialText, { marginHorizontal: 40 }]}> 
              Journaling can help with identifying, processing, and investigating your feelings, as well as provide
              an avenue to reflect on them later. You can write about the events of your day, the emotions you're feeling
              or what caused them, or anything else you find helpful. As a note, it may be counterproductive to journal
              about plans for the rest of the day or the future, as the purpose of mindfulness and the Pause application is to
              foster presentness and calmness in the face of challenges - plans for the future can wait until you're finished with
              your self-care time.
              
            </Text>
            <Text style={[styles.tutorialText, { fontWeight:600, marginTop: 0 }]}> 
              You can choose to leave the text entry box blank if you do not wish to journal or prefer to reflect mentally.
            </Text>
        </View>

      </ScrollView>
    )
}

const styles = StyleSheet.create({
  tutorialHeadingContainer: {
    backgroundColor: Colors.blue,
    borderRadius: Values.borderRadius,
    borderWidth: 2,
    borderColor: Colors.green,
    height: 70,
    width: 400,
    fontWeight: 600,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  tutorialHeading: {
    fontSize: 30,
    fontWeight: 600,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  tutorialSubHeading: {
    fontSize: 25,
    margin: 20,
    marginTop: 20,
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
  goButton: {
    padding: 20,
    borderRadius: Values.borderRadius,
    elevation: 3,
    margin: 10
  },
  menuButton: {
    zIndex: 10,
    backgroundColor: Colors.green
  },
  dropdown: {
    backgroundColor: Colors.green,
    padding: 10,
    marginTop: -15,
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
