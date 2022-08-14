import * as React from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import CountDown from "react-native-countdown-component";

import logo from "./../../assets/TLPLogoCenter.png";
export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoView}>
            <Image style={styles.logo} source={logo} />
          </View>
          <View style={styles.launchView}>
            <Text style={styles.titleText}>NEXT LAUNCH:</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("LAUNCHES")}
            >
              <Text style={styles.titleText}>FUTURE CALENDER--></Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.imageBlock}
            onPress={() =>
              navigation.navigate("LAUNCHES", { screen: "LaunchDetail" })
            }
          >
            <ImageBackground
              resizeMode="cover"
              source={require("../../assets/rocket.jpg")}
              style={styles.image}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
              >
                ARTEMIS 1
              </Text>
              <Text style={styles.titleText}>NASA KENNEDY SPACE CENTER</Text>
              <CountDown
                until={2 * 24 * 60 * 60}
                digitStyle={{ backgroundColor: "grey" }}
                digitTxtStyle={{ color: "white", fontSize: 20 }}
                separatorStyle={{ color: "white" }}
                timeToShow={["D", "H", "M", "S"]}
                timeLabels={{ d: null, h: null, m: null, s: null }}
                showSeparator
                size={12}
              />
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.storyView}>
            <Text style={styles.titleText}>NEWEST STORY:</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("NEWS")}
            >
              <Text style={styles.titleText}>MORE STORIES--></Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.imageBlock}
            onPress={() =>
              navigation.navigate("NEWS", { screen: "StoryDetail" })
            }
          >
            <ImageBackground
              resizeMode="cover"
              source={require("../../assets/spacex.jpg")}
              style={styles.image2}
            >
              <Text style={styles.titleText2}>
                SPACEX set to launch historic mission to the Sun
              </Text>
              <Text style={styles.date}>December 12, 2023</Text>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.spotlightView}>
            <Text style={styles.spotlightTitle}>SPOTLIGHT OF THE DAY</Text>
          </View>
          <View style={styles.astronuatView}>
            <ImageBackground
              resizeMode="center"
              source={require("../../assets/astronaut2.jpg")}
              style={styles.astronaut}
            >
              <Text style={styles.astronautName}>JEREMY HANSEN</Text>
            </ImageBackground>
            <ImageBackground
              resizeMode="cover"
              source={require("../../assets/astronaut1.jpg")}
              style={styles.astronaut}
            >
              <Text style={styles.astronautName}>CREW 4</Text>
            </ImageBackground>
          </View>
          <View style={styles.tlp}>
            <TouchableOpacity
              style={styles.fullButton}
              onPress={() => navigation.navigate("TLP")}
            >
              <Text style={styles.tlptxt}>TLP+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                Linking.openURL("https://www.twitter.com/tlpn_official")
              }
            >
              <Text style={styles.btntxt}>TWITTER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntxt}>ABOUT US</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/thelaunchpad")
              }
            >
              <Text style={styles.btntxt}>YOUTUBE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tlp}>
            <TouchableOpacity
              style={styles.fullButton}
              onPress={() => navigation.navigate("Settings")}
            >
              <Text style={styles.tlptxt}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    // backgroundColor: 'red',
    width: "60%",
    height: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // marginLeft: '6%',
    resizeMode: "contain",
  },
  logoView: {
    // backgroundColor: 'green',
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  btntxt: {
    color: "white",
    fontWeight: "bold",
  },
  btn: {
    flex: 1,
    marginHorizontal: 3,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "33%",
    borderRadius: 20,
  },
  btns: {
    marginTop: 8,
    // backgroundColor: 'green',
    width: "90%",
    height: 40,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius:20,
  },
  tlptxt: {
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "500",
    color: "white",
  },
  tlp: {
    marginTop: 13,
    backgroundColor: "grey",
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  astronautName: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    alignContent: "center",
    // marginLeft: 13,
    // marginTop: 10,
    margin: 10,
  },
  astronaut: {
    flex: 0.9,
    margin: 5,
    width: "100%",
    height: 100,
    alignSelf: "center",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    // borderWidth: 0,
  },
  astronuatView: {
    width: "90%",
    height: 100,
    flexDirection: "row",
    flex: 1,
    // backgroundColor:'green',
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  spotlightTitle: {
    color: "white",
    marginTop: 10,
    fontWeight: "bold",
  },
  spotlightView: {
    // marginTop:1,
    marginBottom: 2,
  },
  imageBlock: {
    width: "90%",
  },
  image: {
    margin: 8,
    width: "100%",
    height: 100,
    alignSelf: "center",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    // borderWidth: 0,
  },
  image2: {
    margin: 8,
    width: "100%",
    height: 100,
    alignSelf: "center",
    borderRadius: 20,
    // alignItems: 'center',
    justifyContent: "flex-end",
    overflow: "hidden",
    // borderWidth: 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "500",
    color: "white",
  },
  launchView: {
    marginTop: 12,
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  storyView: {
    marginTop: 2,
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 15,
    color: "white",
  },
  titleText2: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    // alignContent: 'left',
    marginLeft: 13,
    marginTop: 10,
  },
  date: {
    fontSize: 10,
    // fontWeight:'bold',
    color: "white",
    // alignContent: 'left',
    marginLeft: 13,
    marginTop: 1,
    marginBottom: 10,
  },
});
