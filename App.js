import React from "react";
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Animated, Easing} from "react-native";




 const image = { uri: "https://wallpaperaccess.com/full/6181971.jpg" };

 let rotateValueHolder = new Animated.Value(0)

 const startImageRotateFunction = () => {

  rotateValueHolder.setValue(0);y
  Animated.timing(rotateValueHolder, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear,
    useNativeDriver:false,
  }).start(() => startImageRotateFunction())
 }
 const RotateData = rotateValueHolder.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
 })
const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>May the abundance of the Love of Christ fill all the days of your life.</Text>
     <Text style={styles.textBirthday}> Have a Blessed Birthday!</Text>
     <SafeAreaView style={{ flex:1 }}>
      
      <View style={styles.containerImg}>   
   
      <Animated.Image
      style={[styles.imgStyle, {transform: [{rotate: RotateData}]}]}
     
      source={{uri: 'https://www.pngmart.com/files/11/Christmas-Gift-Transparent-Background.png' }} 
      />
   
      <TouchableHighlight style={styles.buttonStart} onPress={startImageRotateFunction}>
        <Text style={styles.buttonText}>
          Click Image To Rotate
        </Text>
      </TouchableHighlight>
      </View>
     </SafeAreaView>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  image: {
    flex: 1,
    justifyContent: "center",
    
  },
  text: {
    color: "white",
    fontSize: 36,
    lineHeight: 42,
    padding: 30,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
  
  },
  textBirthday: {
   
    color: "white",
    fontSize: 50,
    lineHeight: 54,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#ffb4b4",
    fontFamily: "Cochin",
  },
  imgStyle: {
  
    width: 200,
    height: 200,
    justifyContent: "center",
  },
  buttonStart: {
    fontSize: 36,
    color: 'white',
    backgroundColor: '#8dd0b3',
    lineHeight: 64,
  },
  buttonText: {
    padding: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    lineHeight: 64,
  }
 
});

export default App;