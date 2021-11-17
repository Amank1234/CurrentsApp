/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.js</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <SafeAreaView>
      <ScrollView>

        <Text style={styles.heading}>
          CONTACT US
        </Text>

        <Text style={styles.inputstyle}>

          Enter your Name:

        </Text>
        <TextInput onChangeText={text => onChangeText(text)} value={value} style={styles.entertext} >

        </TextInput>
        <Text style={styles.inputstyle2} >

          Enter your Institue's Name:

        </Text>
        <TextInput style={styles.entertext} onChangeText={text => onChangeText2(text)} value2={value2}>

        </TextInput>
        <Text style={styles.inputstyle}>

          Enter your Email:

        </Text>
        <TextInput style={styles.entertext} onChangeText={text => onChangeText3(text)} value3={value3}>

        </TextInput>
        <Text style={styles.inputstyle}>

          Enter your Query:

        </Text>
        <TextInput style={styles.entertext} onChangeText={text => onChangeText4(text)} value4={value4}>

        </TextInput>
        <Button title="SEND" color="#841584" style={styles.buttonstyle}

          onPress={() => Linking.openURL('mailto:amanandhisguru1234@gmail.com?subject=null&body=Name:' + value + '\nInstitute:' + value2 + '\nQuery:' + value4)}
        >

        </Button>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.instagram.com/currents_nitt/?hl=en')}>
            <Image source={require("./assets/insta.png")} />
          </TouchableOpacity>

        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.facebook.com/currentsnitt/')}>
            <Image source={require("./assets/face.png")} />
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputstyle: {
    height: 40,
    margin: 12,
    width: 130,
    borderWidth: 1,
    marginTop:20,
    marginLeft: 40,
    padding: 10,
  },
  inputstyle2: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 1,
    marginTop:20,
    marginLeft: 40,
    padding: 10,
  },
  entertext:{
  
    height: 40,
    margin: 12,
    
    borderWidth: 1,
    marginTop:1,
    marginLeft: 40,
    padding: 10,
  },
  heading: {
    height: 60,
   
    marginTop:2,
    fontSize: 30,
    
    padding: 10,
    alignSelf: 'center',
    color: '#000000',
  },
  buttonstyle:{
   
    marginTop: 5,
    marginLeft: 50,
    borderWidth:5,
    paddingVertical: 12,
    paddingHorizontal: 32,
    fontSize: 20,
    alignSelf: 'center',
    elevation: 3,
    borderRadius: 4,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});

export default App;
