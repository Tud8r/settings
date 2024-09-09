import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  useFonts,
  Fredoka_400Regular,
  Fredoka_500Medium,
  Fredoka_600SemiBold,
  Fredoka_700Bold,
} from "@expo-google-fonts/fredoka";

export default function App() {
  let [fontsLoaded] = useFonts({
    Fredoka_400Regular,
    Fredoka_500Medium,
    Fredoka_600SemiBold,
    Fredoka_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
      <Ionicons style= {{position: 'absolute', alignSelf: 'flex-start', left: 15, top:35}} name="chevron-back-outline" size={23} color="black" />
        <Text style={{ color: '#1C2129', fontFamily: 'Fredoka_600SemiBold', fontSize: 36 }}>
          Settings
        </Text>
      </View>

      <View style={styles.buttomContainer}>

        <TouchableOpacity style={styles.button}>


          <View style={styles.left}>
            <MaterialCommunityIcons name="account-circle-outline" size={25} color="black" />
          </View>
          <View style={styles.center}>
            <Text style={styles.upperText}>Profile</Text>
            <Text style={styles.bottomText}>Change your personal details</Text>
          </View>
          <View style={styles.right}>
            <Ionicons name="chevron-forward-outline" size={20} color="gray" />
          </View>

        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>


          <View style={styles.left}>
            <MaterialCommunityIcons name="book-outline" size={25} color="black" />
          </View>
          <View style={styles.center}>
            <Text style={styles.upperText}>Resources</Text>
            <Text style={styles.bottomText}>Learn about ecological information</Text>
          </View>
          <View style={styles.right}>
            <Ionicons name="chevron-forward-outline" size={20} color="gray" />
          </View>

        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>


          <View style={styles.left}>
            <Ionicons name="stats-chart" size={25} color="black" />
          </View>
          <View style={styles.center}>
            <Text style={styles.upperText}>Progress</Text>
            <Text style={styles.bottomText}>See your evolution</Text>
          </View>
          <View style={styles.right}>
            <Ionicons name="chevron-forward-outline" size={20} color="gray" />
          </View>

        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>


          <View style={styles.left}>
            <MaterialCommunityIcons name="lock-outline" size={25} color="black" />
          </View>
          <View style={styles.center}>
            <Text style={styles.upperText}>Privacy Policy</Text>
            <Text style={styles.bottomText}>Read the Privacy Policy</Text>
          </View>
          <View style={styles.right}>
            <Ionicons name="chevron-forward-outline" size={20} color="gray" />
          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>


          <View style={styles.left}>
            <MaterialCommunityIcons name="help-circle-outline" size={25} color="black" />
          </View>
          <View style={styles.center}>
            <Text style={styles.upperText}>Help Centre</Text>
            <Text style={styles.bottomText}>Ask for help</Text>
          </View>
          <View style={styles.right}>
            <Ionicons name="chevron-forward-outline" size={20} color="gray" />
          </View>

        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttomContainer: {
    flex: 4,

    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 20,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 10,


    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 72, // Give the button a fixed height
    width: 344, // Adjust the width as needed
  },
  left: {
    flex: 2,
    alignItems: 'center',
  },
  right: {
    flex: 1,
  },
  center: {
    flex: 10,
  },
  upperText: {
    fontSize: 16,
    fontFamily: 'Fredoka_700Bold',
    color: '#1C2129'

  },
  bottomText: {
    fontSize: 11,
    fontFamily: 'Fredoka_500Medium',
    color: '#818A99',
  },
});
