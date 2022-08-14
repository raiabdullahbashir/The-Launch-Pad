import * as React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function Launches({ navigation }) {
  const back = '<';
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backbuttons}
        onPress={() => navigation.navigate('HOME')}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
          }}>
          {back}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 10,
            color: 'white',
          }}>
          BACK
        </Text>
      </TouchableOpacity>
      <View style={styles.scrollViewParentView}>
        <View style={styles.launchView}>
          <Text style={styles.titleText}>NEXT LAUNCH:</Text>
          <TouchableOpacity>
            <Text
              style={styles.rightTitleText}
              onPress={() =>
                navigation.navigate('UpComingLaunches', { page: 'upcoming' })
              }>
              FUTURE CALENDER-->
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.imageBlock, { borderBottomColor: 'green' }]}>
          <ImageBackground
            source={require('../../assets/rocket.jpg')}
            style={styles.image}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
              ARTEMIS 1
            </Text>
            <Text style={styles.titleText}>NASA KENNEDY SPACE CENTER</Text>
            <CountDown
              until={2 * 24 * 60 * 60}
              digitStyle={{ backgroundColor: 'grey' }}
              digitTxtStyle={{ color: 'white', fontSize: 20 }}
              separatorStyle={{ color: 'white' }}
              timeToShow={['D', 'H', 'M', 'S']}
              timeLabels={{ d: null, h: null, m: null, s: null }}
              showSeparator
              size={12}
            />
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.rowView}>
          <TouchableOpacity
            style={[styles.rowimageBlock, { borderBottomColor: 'orange' }]}>
            <ImageBackground
              source={require('../../assets/rocket.jpg')}
              style={styles.rowimage}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                TRANSPORTER 1
              </Text>
              <Text style={styles.rowtitleText}>NASA KENNEDY SPACE CENTER</Text>
              <CountDown
                until={2 * 24 * 60 * 60}
                digitStyle={{ backgroundColor: 'grey' }}
                digitTxtStyle={{ color: 'white', fontSize: 20 }}
                separatorStyle={{ color: 'white' }}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{ d: null, h: null, m: null, s: null }}
                showSeparator
                size={12}
              />
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.rowimageBlock, { borderBottomColor: 'red' }]}>
            <ImageBackground
              source={require('../../assets/rocket.jpg')}
              style={styles.rowimage}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                TRANSPORTER 1
              </Text>
              <Text style={styles.rowtitleText}>NASA KENNEDY SPACE CENTER</Text>
              <CountDown
                until={2 * 24 * 60 * 60}
                digitStyle={{ backgroundColor: 'grey' }}
                digitTxtStyle={{ color: 'white', fontSize: 20 }}
                separatorStyle={{ color: 'white' }}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{ d: null, h: null, m: null, s: null }}
                showSeparator
                size={12}
              />
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={[styles.launchView, { marginTop: 30 }]}>
          <Text style={styles.titleText}>RECENT LAUNCHES:</Text>
          <TouchableOpacity>
            <Text
              style={styles.rightTitleText}
              onPress={() =>
                navigation.navigate('UpComingLaunches', { page: 'previous' })
              }>
              PAST CALENDER-->
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fourrowView}>
          <TouchableOpacity
            style={[styles.rowimageBlock, { borderBottomColor: 'orange' }]}>
            <ImageBackground
              source={require('../../assets/rocket.jpg')}
              style={styles.rowimage}>
              <Text style={styles.date}>SEPTEMBER 12, 2019</Text>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                TRANSPORTER 1
              </Text>
              <Text style={styles.rowtitleText}>NASA KENNEDY SPACE CENTER</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.rowimageBlock, { borderBottomColor: 'orange' }]}>
            <ImageBackground
              source={require('../../assets/rocket.jpg')}
              style={styles.rowimage}>
              <Text style={styles.date}>SEPTEMBER 12, 2019</Text>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                TRANSPORTER 1
              </Text>
              <Text style={styles.rowtitleText}>NASA KENNEDY SPACE CENTER</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.fourrowView}>
          <TouchableOpacity
            style={[styles.rowimageBlock, { borderBottomColor: 'red' }]}>
            <ImageBackground
              source={require('../../assets/rocket.jpg')}
              style={styles.rowimage}>
              <Text style={styles.date}>SEPTEMBER 12, 2019</Text>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                TRANSPORTER 1
              </Text>
              <Text style={styles.rowtitleText}>NASA KENNEDY SPACE CENTER</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.rowimageBlock, { borderBottomColor: 'green' }]}>
            <ImageBackground
              source={require('../../assets/rocket.jpg')}
              style={styles.rowimage}>
              <Text style={styles.date}>SEPTEMBER 12, 2019</Text>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                TRANSPORTER 1
              </Text>
              <Text style={styles.rowtitleText}>NASA KENNEDY SPACE CENTER</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={[styles.launchView, { marginTop: 30 }]}>
          <Text style={styles.titleText}>ON THIS DAY:</Text>
          <TouchableOpacity   onPress={() =>
                navigation.navigate('UpComingLaunches', { page: 'previous' })
              }>
            <Text style={styles.rightTitleText}>SEARCH A DATE--></Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={styles.todaysLaunchView}
          horizontal={true}>
          <TouchableOpacity style={styles.threeimageBlock}>
            <ImageBackground
              source={require('../../assets/rocket.jpg')}
              style={styles.threerowimage}>
              <Text style={styles.year}>2019</Text>
              <Text style={styles.threeRowdate}>SEPTEMBER 12</Text>
              <Text
                style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>
                TRANSPORTER 1
              </Text>
              <Text style={styles.threeRowText}>NASA KENNEDY SPACE CENTER</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.threeimageBlock}>
            <ImageBackground
              source={require('../../assets/rocket.jpg')}
              style={styles.threerowimage}>
              <Text style={styles.year}>2019</Text>
              <Text style={styles.threeRowdate}>SEPTEMBER 12</Text>
              <Text
                style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>
                TRANSPORTER 1
              </Text>
              <Text style={styles.threeRowText}>NASA KENNEDY SPACE CENTER</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.threeimageBlock}>
            <ImageBackground
              source={require('../../assets/rocket.jpg')}
              style={styles.threerowimage}>
              <Text style={styles.year}>2019</Text>
              <Text style={styles.threeRowdate}>SEPTEMBER 12</Text>
              <Text
                style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>
                TRANSPORTER 1
              </Text>
              <Text style={styles.threeRowText}>NASA KENNEDY SPACE CENTER</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.threeimageBlock}>
            <ImageBackground
              source={require('../../assets/rocket.jpg')}
              style={styles.threerowimage}>
              <Text style={styles.year}>2019</Text>
              <Text style={styles.threeRowdate}>SEPTEMBER 12</Text>
              <Text
                style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>
                TRANSPORTER 1
              </Text>
              <Text style={styles.threeRowText}>NASA KENNEDY SPACE CENTER</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.threeimageBlock}>
            <ImageBackground
              source={require('../../assets/rocket.jpg')}
              style={styles.threerowimage}>
              <Text style={styles.year}>2019</Text>
              <Text style={styles.threeRowdate}>SEPTEMBER 12</Text>
              <Text
                style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>
                TRANSPORTER 1
              </Text>
              <Text style={styles.threeRowText}>NASA KENNEDY SPACE CENTER</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  threeRowText: {
    fontSize: 10,
    color: 'white',
    marginBottom: '10%',
  },
  year: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '10%',
  },
  threeRowdate: {
    fontSize: 12,
    color: 'white',
  },
  threeimageBlock: {
    marginTop: 4,
    width: 170,
    height: '100%',
    borderRadius: 10,

    //borderBottomColor: 'green',
    // //backgroundColor:'green'
    marginHorizontal: 5,
  },
  todaysLaunchView: {
    // width: '100%',
    height: '100%',
    //backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fourrowView: {
    width: '100%',
    height: '14%',
    //backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'space-evenly',
  },

  date: {
    fontSize: 10,
    color: 'white',
    marginTop: '10%',
  },
  rowtitleText: {
    fontSize: 10,
    color: 'white',
    marginBottom: '5%',
  },
  rowView: {
    width: '100%',
    height: '15%',
    //backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    paddingTop: '5%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderBottomColor:'red',
    borderTopRightRadius:3,
    borderTopLeftRadius: 3,
    borderBottomWidth: 3,
  },
  threerowimage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // paddingTop:'5%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    // borderBottomWidth:20,
    // backgroundColor:'yellow'
  },
  rowimage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // paddingTop:'5%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    // borderBottomWidth:20,
    // //backgroundColor:'yellow'
  },
  rowimageBlock: {
    marginTop: 4,
    width: '48%',
    height: '100%',
    borderBottomWidth: 3,
    borderRadius: 3,

    //borderBottomColor: 'green',
    // //backgroundColor:'green'
  },
  imageBlock: {
    marginTop: 4,
    width: '98%',
    borderBottomWidth: 3,
    borderRadius: 3,

    //borderBottomColor: 'green',
    // //backgroundColor:'green'
  },
  launchView: {
    //backgroundColor: 'green',
    marginTop: 6,

    paddingLeft: 10,
    flexDirection: 'row',
    width: '93%',
    justifyContent: 'space-between',
  },
  storyView: {
    marginTop: 2,
    paddingHorizontal: 10,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 15,
    color: 'white',
  },
  rightTitleText: {
    fontSize: 10,
    color: 'white',
    marginTop: 5,
  },
  scrollViewParentView: {
    //  flex:1,
    //backgroundColor: 'yellow',
    height: 600,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollView: {
    // flex: 1,
    //backgroundColor: 'red',
    height: '100%',
    width: '100%',
    // justifyContent:'center',
    alignItems: 'center',
  },
  backbuttons: {
    //backgroundColor: 'grey',
    height: 30,
    width: '100%',
    flexDirection: 'row',
    // marginVertical: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    // padding:40
  },
  container: {
    flex: 1,
    // paddingVertical: '12%',
    paddingTop: '10%',
    paddingBottom: '8%',
    paddingHorizontal: '5%',
    // justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
  },

  text: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  },
});
