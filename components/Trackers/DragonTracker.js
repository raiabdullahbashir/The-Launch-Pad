import React, { useState } from "react";

import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import DashedLine from "react-native-dashed-line";

import falcon from "./../../assets/Falcon9-1.1.png";
import nasa_red from "./../../assets/spaceCompanies/nasa_red.png";

export default function DragonTracker({ navigation }) {
  const back = "<";
  const [search, onChangeSearch] = useState(null);

  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const [sortItems, setSortItems] = useState([
    { label: "A-Z", value: "A_Z" },
    { label: "Booster Number", value: "Booster Number" },
    { label: "Most Flown Missions", value: "Most Flown Missions" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarView}>
        <View
          style={{
            // //backgroundColor:'red',
            width: "10%",
          }}
        >
          <TouchableOpacity
            style={styles.backbuttons}
            onPress={() => navigation.navigate("Launches")}
          >
            <Text style={styles.backSign}>{back}</Text>
            <Text style={styles.backText}>BACK</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titileTop}>DRAGON TRACKER</Text>

        <View
          style={{
            // //backgroundColor:'red' ,
            width: "8%",
            height: 40,
            marginRight: 38,
          }}
        >
          <DropDownPicker
            open={sortOpen}
            value={sortValue}
            items={sortItems}
            setOpen={setSortOpen}
            // setValue={setGenderValue}
            // closeOnBackPressed={true}
            theme="DARK"
            setItems={setSortItems}
            modalTitle="Select an item"
            listMode="MODAL"
            // style={styles.dropdown}
            style={{ backgroundColor: "black" }}
            textStyle={styles.text}
            containerStyle={{ width: 80 }}
            placeholder={
              <Ionicons name={"funnel-outline"} size={20} color={"white"} />
            }
          />
        </View>
      </View>

      <View style={styles.topView}>
        <View style={styles.leftButtonTypeView}>
          <Text style={styles.text}>CREW</Text>
        </View>
        <View style={styles.rightButtonTypeView}>
          <Text style={styles.text}>CARGO</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.bottomView}>
          <View style={styles.rowView}>
            <Image style={styles.falcon} source={falcon} />

            <View style={styles.line}>
              <DashedLine
                dashLength={8}
                dashThickness={5}
                dashColor="white"
                style={{ marginTop: "70%" }}
              />
            </View>
            <View style={styles.hexagon}>
              <View style={styles.hexagonInner}>
                <Text style={styles.text}>C209</Text>
              </View>
              <View style={styles.hexagonBefore} />
              <View style={styles.hexagonAfter} />
            </View>
            <View style={styles.line}>
              <DashedLine
                dashLength={4}
                dashThickness={3}
                dashColor="white"
                style={{ marginTop: "100%" }}
              />
            </View>
            <View style={styles.rectangularParentView}>
              <Text style={styles.titile}>DM-2</Text>
              <Text style={styles.date}>LAUNCH</Text>
              <Text style={[styles.date, { marginBottom: "5%" }]}>
                01/02/2019
              </Text>
              <Text style={styles.date}>SPLASHDOWN</Text>
              <Text style={styles.date}>04/04/2019</Text>
              <View style={styles.logoView}>
                <Image style={styles.logo} source={nasa_red} />
              </View>
            </View>
            <View style={styles.line}>
              <DashedLine
                dashLength={4}
                dashThickness={3}
                dashColor="white"
                style={{ marginTop: "100%" }}
              />
            </View>
            <View style={styles.rectangularParentView}>
              <Text style={styles.titile}>CREW-1</Text>
              <Text style={styles.date}>LAUNCH</Text>
              <Text style={[styles.date, { marginBottom: "5%" }]}>
                01/02/2019
              </Text>
              <Text style={styles.date}>SPLASHDOWN</Text>
              <Text style={styles.date}>04/04/2019</Text>
              <View style={styles.logoView}>
                <Image style={styles.logo} source={nasa_red} />
              </View>
            </View>
          </View>
          <View style={styles.verticalLineView}>
            <View style={styles.verticleLine}></View>
          </View>

          <View style={styles.rowView}>
            <Image style={styles.falcon} source={falcon} />

            <View style={styles.line}>
              <DashedLine
                dashLength={8}
                dashThickness={5}
                dashColor="white"
                style={{ marginTop: "70%" }}
              />
            </View>
            <View style={styles.hexagon}>
              <View style={styles.hexagonInner}>
                <Text style={styles.text}>C209</Text>
              </View>
              <View style={styles.hexagonBefore} />
              <View style={styles.hexagonAfter} />
            </View>
            <View style={styles.line}>
              <DashedLine
                dashLength={4}
                dashThickness={3}
                dashColor="white"
                style={{ marginTop: "100%" }}
              />
            </View>
            <View style={styles.rectangularParentView}>
              <Text style={styles.titile}>DM-2</Text>
              <Text style={styles.date}>LAUNCH</Text>
              <Text style={[styles.date, { marginBottom: "5%" }]}>
                01/02/2019
              </Text>
              <Text style={styles.date}>SPLASHDOWN</Text>
              <Text style={styles.date}>04/04/2019</Text>
              <View style={styles.logoView}>
                <Image style={styles.logo} source={nasa_red} />
              </View>
            </View>
            <View style={styles.line}>
              <DashedLine
                dashLength={4}
                dashThickness={3}
                dashColor="white"
                style={{ marginTop: "100%" }}
              />
            </View>
            <View style={styles.rectangularParentView}>
              <Text style={styles.titile}>CREW-1</Text>
              <Text style={styles.date}>LAUNCH</Text>
              <Text style={[styles.date, { marginBottom: "5%" }]}>
                01/02/2019
              </Text>
              <Text style={styles.date}>SPLASHDOWN</Text>
              <Text style={styles.date}>04/04/2019</Text>
              <View style={styles.logoView}>
                <Image style={styles.logo} source={nasa_red} />
              </View>
            </View>
          </View>
          <View style={styles.verticalLineView}>
            <View style={styles.verticleLine}></View>
          </View>
          <View style={styles.rowView}>
            <Image style={styles.falcon} source={falcon} />

            <View style={styles.line}>
              <DashedLine
                dashLength={8}
                dashThickness={5}
                dashColor="white"
                style={{ marginTop: "70%" }}
              />
            </View>
            <View style={styles.hexagon}>
              <View style={styles.hexagonInner}>
                <Text style={styles.text}>C209</Text>
              </View>
              <View style={styles.hexagonBefore} />
              <View style={styles.hexagonAfter} />
            </View>
            <View style={styles.line}>
              <DashedLine
                dashLength={4}
                dashThickness={3}
                dashColor="white"
                style={{ marginTop: "100%" }}
              />
            </View>
            <View style={styles.rectangularParentView}>
              <Text style={styles.titile}>DM-2</Text>
              <Text style={styles.date}>LAUNCH</Text>
              <Text style={[styles.date, { marginBottom: "5%" }]}>
                01/02/2019
              </Text>
              <Text style={styles.date}>SPLASHDOWN</Text>
              <Text style={styles.date}>04/04/2019</Text>
              <View style={styles.logoView}>
                <Image style={styles.logo} source={nasa_red} />
              </View>
            </View>
            <View style={styles.line}>
              <DashedLine
                dashLength={4}
                dashThickness={3}
                dashColor="white"
                style={{ marginTop: "100%" }}
              />
            </View>
            <View style={styles.rectangularParentView}>
              <Text style={styles.titile}>CREW-1</Text>
              <Text style={styles.date}>LAUNCH</Text>
              <Text style={[styles.date, { marginBottom: "5%" }]}>
                01/02/2019
              </Text>
              <Text style={styles.date}>SPLASHDOWN</Text>
              <Text style={styles.date}>04/04/2019</Text>
              <View style={styles.logoView}>
                <Image style={styles.logo} source={nasa_red} />
              </View>
            </View>
          </View>
          <View style={styles.verticalLineView}>
            <View style={styles.verticleLine}></View>
          </View>
          <View style={styles.rowView}>
            <Image style={styles.falcon} source={falcon} />

            <View style={styles.line}>
              <DashedLine
                dashLength={8}
                dashThickness={5}
                dashColor="white"
                style={{ marginTop: "70%" }}
              />
            </View>
            <View style={styles.hexagon}>
              <View style={styles.hexagonInner}>
                <Text style={styles.text}>C209</Text>
              </View>
              <View style={styles.hexagonBefore} />
              <View style={styles.hexagonAfter} />
            </View>
            <View style={styles.line}>
              <DashedLine
                dashLength={4}
                dashThickness={3}
                dashColor="white"
                style={{ marginTop: "100%" }}
              />
            </View>
            <View style={styles.rectangularParentView}>
              <Text style={styles.titile}>DM-2</Text>
              <Text style={styles.date}>LAUNCH</Text>
              <Text style={[styles.date, { marginBottom: "5%" }]}>
                01/02/2019
              </Text>
              <Text style={styles.date}>SPLASHDOWN</Text>
              <Text style={styles.date}>04/04/2019</Text>
              <View style={styles.logoView}>
                <Image style={styles.logo} source={nasa_red} />
              </View>
            </View>
            <View style={styles.line}>
              <DashedLine
                dashLength={4}
                dashThickness={3}
                dashColor="white"
                style={{ marginTop: "100%" }}
              />
            </View>
            <View style={styles.rectangularParentView}>
              <Text style={styles.titile}>CREW-1</Text>
              <Text style={styles.date}>LAUNCH</Text>
              <Text style={[styles.date, { marginBottom: "5%" }]}>
                01/02/2019
              </Text>
              <Text style={styles.date}>SPLASHDOWN</Text>
              <Text style={styles.date}>04/04/2019</Text>
              <View style={styles.logoView}>
                <Image style={styles.logo} source={nasa_red} />
              </View>
            </View>
          </View>
          <View style={styles.verticalLineView}>
            <View style={styles.verticleLine}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarView: {
    // backgroundColor: 'blue',
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginTop: 19,
  },
  titileTop: {
    marginTop: 6,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  backText: {
    marginTop: 6,
    fontSize: 10,
    color: "white",
  },
  backSign: {
    fontSize: 30,
    color: "white",
  },
  backbuttons: {
    // //backgroundColor: 'grey',
    height: 50,
    // width: '97%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    // padding:40
  },
  verticleLine: {
    // paddingLeft:10,
    height: "100%",
    // marginBottom:10,
    borderStyle: "dashed",
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "red",
    // borderTopColor: 'red',
    marginRight: "10%",
  },
  verticalLineView: {
    //backgroundColor: 'white',
    width: "100%",
    height: "6%",
    justifyContent: "flex-end",

    alignItems: "flex-end",
  },
  hexagon: {
    width: 55,
    height: 40,
    marginTop: "6.5%",
    // //backgroundColor: 'yellow',
  },
  hexagonInner: {
    width: 55,
    height: 30,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  hexagonAfter: {
    position: "absolute",
    bottom: -13,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 28,
    borderLeftColor: "transparent",
    borderRightWidth: 28,
    borderRightColor: "transparent",
    borderTopWidth: 23,
    borderTopColor: "grey",
  },
  hexagonBefore: {
    position: "absolute",
    top: -23,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 28,
    borderLeftColor: "transparent",
    borderRightWidth: 28,
    borderRightColor: "transparent",
    borderBottomWidth: 23,
    borderBottomColor: "grey",
  },
  line: {
    width: "7%",
    height: "50%",
    // backgroundColor: 'white',
    marginTop: "4%",
  },
  logo: {
    // backgroundColor: 'white',

    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  logoView: {
    ////backgroundColor: 'red',
    // marginTop: '5%',
    width: "80%",
    height: "25%",
    alignItems: "center",
  },
  date: {
    fontSize: 8,
    // fontStyle: 'italic',
    fontWeight: "bold",
    color: "white",
  },
  titile: {
    fontSize: 13,
    // fontStyle: 'italic',
    fontWeight: "bold",
    color: "white",
    marginBottom: "6%",
  },
  rectangularParentView: {
    // backgroundColor: 'black',
    width: "20%",
    height: "80%",
    alignItems: "center",
    // justifyContent: 'center',
    borderWidth: 3,
    marginTop: "6%",
    // flex:1,
    borderColor: "white",
  },
  hexagonParentView: {
    //backgroundColor: 'red',
    width: "15%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "green",
  },
  falcon: {
    //backgroundColor: 'blue',

    width: "20%",
    height: "100%",
    resizeMode: "stretch",
  },
  rowView: {
    // flex: 1,
    justifyContent: "flex-start",
    // alignItems: 'center',
    // backgroundColor: 'yellow',
    width: "100%",
    height: 110,
    // borderRadius:20
    flexDirection: "row",
    direction: "rtl",
    // paddingTop:'1%'
  },
  bottomView: {
    // flex: 1,
    // justifyContent: 'flex-end',
    alignItems: "flex-start",
    // backgroundColor: 'green',
    width: "100%",
    // height: '92%',
    // marginBottom: 40,
    // borderRadius:20
    // flexDirection: 'row',
  },
  leftButtonTypeView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    width: "35%",
    height: "40%",
    borderRadius: 20,
  },
  topView: {
    // flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: 'purple',
    width: "50%",
    height: "6%",
    // borderRadius:20
    flexDirection: "row",
  },
  rightButtonTypeView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: "35%",
    height: "40%",
    borderRadius: 20,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    //backgroundColor: 'green',
    paddingHorizontal: "2%",
  },

  text: {
    fontSize: 15,
    // fontStyle: 'italic',
    fontWeight: "bold",
    color: "white",
  },
});
