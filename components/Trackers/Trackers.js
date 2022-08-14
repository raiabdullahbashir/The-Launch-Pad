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
} from "react-native";

export default function Trackers({ navigation }) {
  const back = "<";
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backbuttons}
          onPress={() => navigation.navigate("HOME")}
        >
          <Text
            style={{
              fontSize: 30,
              color: "white",
            }}
          >
            {back}
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 10,
              color: "white",
            }}
          >
            BACK
          </Text>
        </TouchableOpacity>

        <View style={styles.lowerView}>
          <TouchableOpacity
            style={styles.lowerbuttons}
            onPress={() => navigation.navigate("DragonTracker")}
          >
            <Text style={styles.text}>DRAGON</Text>
            <Text style={styles.text}>TRACKER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lowerbuttons}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text style={styles.text}>ISS</Text>
            <Text style={styles.text}>DASHBOARD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lowerView}>
          <TouchableOpacity
            style={styles.lowerbuttons}
            onPress={() => navigation.navigate("FalconTracker")}
          >
            <Text style={styles.text}>FALCON</Text>
            <Text style={styles.text}>TRACKER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lowerbuttons}>
            <Text style={styles.text}>STARTBASE</Text>
            <Text style={styles.text}>DASHBOARD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lowerView}>
          <TouchableOpacity style={styles.lowerbuttons}>
            <Text style={styles.text}>STARTSHIP</Text>
            <Text style={styles.text}>TRACKER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lowerbuttons}>
            <Text style={styles.text}>SPACE COAST</Text>
            <Text style={styles.text}>DASHBOARD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backbuttons: {
    // backgroundColor: 'grey',
    height: 30,
    width: "97%",
    flexDirection: "row",
    // marginVertical: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 20,
    // padding:40
  },
  lowerbuttons: {
    backgroundColor: "grey",
    height: 150,
    // padding:'10%',
    width: "49%",
    // marginVertical:3,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
    borderRadius: 20,
    // padding:40
  },
  lowerView: {
    // backgroundColor: 'yellow',
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // height:'100%',
    flexDirection: "row",
    margin: 3,
  },

  container: {
    flex: 1,
    paddingVertical: "12%",
    paddingHorizontal: "5%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    // fontStyle: 'italic',
    fontWeight: "bold",
    color: "white",
  },
});
