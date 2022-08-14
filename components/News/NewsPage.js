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
import image from "../../assets/spacex.jpg";
import rocket from "../../assets/rocket.jpg";
import astronaut from "../../assets/astronaut1.jpg";
export default function NewsPage({ navigation }) {
  const array = [
    {
      image1: image,
      title: "SPACEX set to launch historic mission to the Moon",
      date: "December 12, 2023",
      description:
        "With Artemis missions, NASA will land the first woman and first person of color on the Moon, using innovative technologies to explore more of the lunar surface than ever before. We will collaborate with commercial and international partners and establish the first long-term presence on the Moon. Then, we will use what we learn on and around the Moon to take the next giant leap: sending the first astronauts to Mars.",
    },
    {
      image1: rocket,
      title: "SPACEX set to launch historic mission to the Sun",
      date: "Agust 22, 2025",
      description:
        "With Artemis missions, NASA will land the first woman and first person of color on the Moon, using innovative technologies to explore more of the lunar surface than ever before. We will collaborate with commercial and international partners and establish the first long-term presence on the Moon. Then, we will use what we learn on and around the Moon to take the next giant leap: sending the first astronauts to Mars.",
    },
    {
      image1: astronaut,
      title: "SPACEX set to launch historic mission to the Mars",
      date: "November 05, 2024",
      description:
        "With Artemis missions, NASA will land the first woman and first person of color on the Moon, using innovative technologies to explore more of the lunar surface than ever before. We will collaborate with commercial and international partners and establish the first long-term presence on the Moon. Then, we will use what we learn on and around the Moon to take the next giant leap: sending the first astronauts to Mars.",
    },
  ];
  return (
    // <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.storyView1}>
          <TouchableOpacity
            style={styles.imageBlock}
            onPress={() => {
              navigation.navigate("StoryDetail");
            }}
          >
            <ImageBackground
              resizeMode="cover"
              source={image}
              style={styles.image2}
            >
              <Text style={styles.titleText2}>
                SPACEX set to launch historic mission to the Sun
              </Text>
              <Text style={styles.date}>December 12, 2023</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.storyView}>
          <TouchableOpacity
            style={styles.imageBlock1}
            onPress={() => {
              navigation.navigate("StoryDetail");
            }}
          >
            <ImageBackground
              resizeMode="cover"
              source={image}
              style={styles.image3}
            >
              <Text style={styles.storytitle3}>
                SPACEX set to launch historic mission to the Sun
              </Text>
              <Text style={styles.date2}>December 24, 2023</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageBlock1}
            onPress={() => {
              navigation.navigate("StoryDetail");
            }}
          >
            <ImageBackground
              resizeMode="cover"
              source={image}
              style={styles.image3}
            >
              <Text style={styles.storytitle3}>
                SPACEX set to launch historic mission to the Sun
              </Text>
              <Text style={styles.date2}>December 12, 2023</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryView}>
          <Text style={styles.categortitle}>AMERICAS</Text>
          <Text style={styles.categortitle}>EUROPE</Text>
        </View>
        <View style={styles.lineView}>
          <View style={styles.line} />
          <View style={styles.line} />
        </View>
        <View style={styles.storyParentView}>
          <View style={styles.storyChildView}>
            {array.map((element) => {
              return (
                <TouchableOpacity
                  style={styles.storyChild2View}
                  onPress={() => {
                    navigation.navigate("StoryDetail");
                  }}
                >
                  <View style={styles.storyphotoView}>
                    <ImageBackground
                      resizeMode="cover"
                      source={element.image1}
                      style={styles.storyimage}
                    ></ImageBackground>
                  </View>
                  <View style={styles.storyDetailView}>
                    <Text style={styles.storytitle4}>{element.title}</Text>
                    <Text style={styles.date3}>{element.date}</Text>
                    <Text
                      style={styles.description}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {element.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.storyChildView}>
            {array.map((element) => {
              return (
                <TouchableOpacity
                  style={styles.storyChild2View}
                  onPress={() => {
                    navigation.navigate("StoryDetail");
                  }}
                >
                  <View style={styles.storyphotoView}>
                    <ImageBackground
                      resizeMode="cover"
                      source={element.image1}
                      style={styles.storyimage}
                    ></ImageBackground>
                  </View>
                  <View style={styles.storyDetailView}>
                    <Text style={styles.storytitle4}>{element.title}</Text>
                    <Text style={styles.date3}>{element.date}</Text>
                    <Text style={styles.description}>
                      {element.description.length > 50
                        ? element.description.substring(0, 50 - 11) + "..."
                        : element.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.categoryView2}>
          <Text style={styles.categortitle}>ASIA</Text>
          <Text style={styles.categortitle}>IN SPACE</Text>
        </View>
        <View style={styles.lineView}>
          <View style={styles.line} />
          <View style={styles.line} />
        </View>
        <View style={styles.storyParentView}>
          <View style={styles.storyChildView}>
            {array.map((element) => {
              return (
                <TouchableOpacity
                  style={styles.storyChild2View}
                  onPress={() => {
                    navigation.navigate("StoryDetail");
                  }}
                >
                  <View style={styles.storyphotoView}>
                    <ImageBackground
                      resizeMode="cover"
                      source={element.image1}
                      style={styles.storyimage}
                    ></ImageBackground>
                  </View>
                  <View style={styles.storyDetailView}>
                    <Text style={styles.storytitle4}>{element.title}</Text>
                    <Text style={styles.date3}>{element.date}</Text>
                    <Text
                      style={styles.description}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {element.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.storyChildView}>
            {array.map((element) => {
              return (
                <TouchableOpacity
                  style={styles.storyChild2View}
                  onPress={() => {
                    navigation.navigate("StoryDetail");
                  }}
                >
                  <View style={styles.storyphotoView}>
                    <ImageBackground
                      resizeMode="cover"
                      source={element.image1}
                      style={styles.storyimage}
                    ></ImageBackground>
                  </View>
                  <View style={styles.storyDetailView}>
                    <Text style={styles.storytitle4}>{element.title}</Text>
                    <Text style={styles.date3}>{element.date}</Text>
                    <Text style={styles.description}>
                      {element.description.length > 50
                        ? element.description.substring(0, 50 - 11) + "..."
                        : element.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  storytitle4: {
    // flex:1,
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 4,
    color: "white",
    // alignContent: 'left',
    marginLeft: 4,
    // marginBottom: 10,
  },
  description: {
    fontSize: 10,
    // fontWeight: 'bold',
    color: "white",
    // alignContent: 'left',
    marginLeft: 4,
    marginTop: 6,
    // marginBottom: 8,
  },
  date3: {
    fontSize: 8,
    fontWeight: "bold",
    color: "white",
    // alignContent: 'left',
    marginLeft: 4,
    // marginTop: 1,
    // marginBottom: 8,
  },
  storyimage: {
    flex: 1,
    margin: 4,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 5,
    // justifyContent: 'flex-end',
    overflow: "hidden",
    // borderWidth: 0,
  },
  storyDetailView: {
    flex: 2,
    // width: '80%',
    height: "100%",
    // flexDirection:'row',
    // marginHorizontal: 5, // will be deleted
    // backgroundColor: 'red',
  },
  storyphotoView: {
    flex: 1,
    // padding:1,
    // width: '20%',
    // height: '100%',
    // flexDirection:'row',
    // marginHorizontal: 5, // will be deleted
    // backgroundColor: 'white',
  },
  storyChild2View: {
    // flex: 1,
    // width: '100%',
    height: 83,
    flexDirection: "row",
    margin: 5,
    // padding:5,
    // backgroundColor: 'green',
  },
  storyChildView: {
    // flex: 1,
    width: "50%",
    height: 250,
    // marginHorizontal: 5,
    // marginTop:12,
    // backgroundColor: 'green',
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  storyParentView: {
    // flex:1,
    // backgroundColor: 'yellow',
    flexDirection: "row",
    // marginTop: 20,
    width: "100%",
    height: 300,
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "stretch",
    // flexWrap: 'nowrap',
  },
  line: {
    flex: 1,
    // width: '30%',
    height: 2,
    marginHorizontal: 20,
    backgroundColor: "white",
  },
  lineView: {
    // flex:1,
    // backgroundColor: 'blue',
    flexDirection: "row",
    // marginTop: 20,
    width: "100%",
    height: 15,
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    // flexWrap: 'nowrap',
  },
  categortitle: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: "white",
    // alignContent: 'left',
    // marginLeft: 8,
    // marginBottom: 10,
  },
  categoryView: {
    // flex:1,
    // backgroundColor: 'green',
    flexDirection: "row",
    marginTop: 17,
    width: "100%",
    height: 20,
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
  },
  categoryView2: {
    // flex:1,
    // backgroundColor: 'green',
    flexDirection: "row",
    // marginTop: 5,
    width: "100%",
    height: 20,
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
  },
  imageBlock1: {
    width: "48%",
    height: 120,
    // marginHorizontal: 5,
    // marginVertical:20,
  },
  image3: {
    flex: 1,
    // margin: 5,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 10,
    alignItems: "strech",
    justifyContent: "flex-end",
    overflow: "hidden",
    // borderWidth: 0,
  },
  storytitle3: {
    fontSize: 11,
    fontWeight: "bold",
    color: "white",
    // alignContent: 'left',
    marginLeft: 8,
    // marginBottom: 10,
  },
  date2: {
    fontSize: 8,
    // fontWeight:'bold',
    color: "white",
    // alignContent: 'left',
    marginLeft: 8,
    // marginTop: 1,
    marginBottom: 8,
  },
  storyView1: {
    width: "100%",
    height: 120,
    // flexDirection: 'row',
    // flex: 1,
    // backgroundColor: 'red',
    // margin: 8,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  storyView: {
    width: "100%",
    height: 130,
    flexDirection: "row",
    // flex: 1,
    // padding:20,
    // backgroundColor: 'purple',
    // margin: 8,
    // justifyContent: 'space-evenly',
    // alignItems: 'center',

    // width: '100%',
    // height: 20,
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",

    // marginVertical:0
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
  },

  imageBlock: {
    width: "98%",
    height: 120,
  },
  image2: {
    margin: 8,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 20,
    // alignItems: 'center',
    justifyContent: "flex-end",
    overflow: "hidden",
    // borderWidth: 0,
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
