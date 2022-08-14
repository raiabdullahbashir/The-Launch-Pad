import React, { useState } from 'react';

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
} from 'react-native';
import nasa from './../../assets/spaceCompanies/nasa_red.png';
import CountDown from 'react-native-countdown-component';

export default function News({ navigation }) {
  const [fetchData, setFetchedData] = useState(
    'This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs. This text will be fetched from APIs.'
  );
  const back = '<';
  return (
    <View style={styles.container}>
      <View style={styles.watchButtonParentView}>
        <TouchableOpacity
          style={styles.backbuttons}
          onPress={() =>
            navigation.navigate('UpComingLaunches', { page: 'upcoming' })
          }>
          <Text style={styles.backSignTxt}>{back}</Text>
          <Text style={styles.back}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.watchbuttons}
          onPress={() =>
            Linking.openURL('https://www.youtube.com/thelaunchpad')
          }>
          <Text style={styles.watch}>WATCH</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.pictureView}>
          <Image source={nasa} style={styles.astronautImage} />
        </View>
        <View style={styles.detailView}>
          <Text style={styles.titleTxt}>ARTEMIS 1</Text>
          <Text style={styles.date}>Monday, Aug 29, 2022</Text>
          <CountDown
            until={2 * 24 * 60 * 60}
            digitStyle={{ backgroundColor: 'black' }}
            digitTxtStyle={{ color: 'white', fontSize: 25 }}
            separatorStyle={{ color: 'white' }}
            timeToShow={['D', 'H', 'M', 'S']}
            timeLabels={{ d: null, h: null, m: null, s: null }}
            showSeparator
            size={17}
          />
          <Text style={styles.titleHeading}>Launch Site:</Text>
          <Text style={styles.titleText}>NASA KENNEDY SPACE CENTER</Text>
          <Text style={styles.titleHeading}>Launch Pad:</Text>
          <Text style={styles.titleText}>LAUNCH COMPLEX 39B</Text>
        </View>

        <Text style={styles.date}> MISSION DETAILS:</Text>
        <View style={styles.misisionDetailTextView}>
          <ScrollView>
            <Text style={styles.data}>{fetchData}</Text>
          </ScrollView>
        </View>

        <Text style={[styles.date, { marginTop: 12 }]}> PAYLOAD:</Text>

        <View style={styles.misisionDetailTextView}>
          <ScrollView>
            <Text style={styles.data}>{fetchData}</Text>
          </ScrollView>
        </View>

        <View style={[styles.parentRowView, { marginTop: 12 }]}>
          <View style={styles.singleRowView}>
            <Text style={styles.date}> ROCKET:</Text>
            <View style={styles.misisionDetailTextViewRow}>
              <ScrollView>
                <Text style={styles.data}>{fetchData}</Text>
              </ScrollView>
            </View>
          </View>
          <View style={styles.singleRowView}>
            <Text style={styles.date}> CAPSULE:</Text>
            <View style={styles.misisionDetailTextViewRow}>
              <ScrollView>
                <Text style={styles.data}>{fetchData}</Text>
              </ScrollView>
            </View>
          </View>
        </View>
        <Text style={styles.date}> LAUNCH LOCATION:</Text>
        <View style={styles.mapView}>
          <Text style={styles.date}>MAP OF LOCATION</Text>
        </View>

        <Text style={[styles.date, { marginTop: 12 }]}> AGENCY:</Text>

        <View style={styles.misisionDetailTextView}>
          <ScrollView>
            <Text style={styles.data}>{fetchData}</Text>
          </ScrollView>
        </View>
        <Text style={[styles.date, { marginTop: 12 }]}> MISSION TIMELINE:</Text>

        <View style={styles.misisionDetailTextView}>
          <ScrollView>
            <Text style={styles.data}>{fetchData}</Text>
          </ScrollView>
        </View>
        <Text style={[styles.date, { marginTop: 12 }]}> RELATED STORIES:</Text>

        <View style={styles.parentRowView}>
          <View style={styles.singleRowView}>
            <View style={styles.misisionDetailTextViewRow}>
              <ScrollView>
                <Text style={styles.data}>{fetchData}</Text>
              </ScrollView>
            </View>
          </View>
          <View style={styles.singleRowView}>
            <View style={styles.misisionDetailTextViewRow}>
              <ScrollView>
                <Text style={styles.data}>{fetchData}</Text>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={styles.parentRowView}>
          <View style={styles.singleRowView}>
            <View style={styles.misisionDetailTextViewRow}>
              <ScrollView>
                <Text style={styles.data}>{fetchData}</Text>
              </ScrollView>
            </View>
          </View>
          <View style={styles.singleRowView}>
            <View style={styles.misisionDetailTextViewRow}>
              <ScrollView>
                <Text style={styles.data}>{fetchData}</Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  watchButtonParentView: {
    // backgroundColor: 'green',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  parentRowView: {
    //backgroundColor: 'yellow',
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  singleRowView: {
    //backgroundColor: 'orange',
    width: '48%',
    height: '87%',
  },
  misisionDetailTextViewRow: {
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    borderRadius: 28,
    padding: '4%',
  },
  mapView: {
    width: '100%',
    height: 80,
    backgroundColor: 'grey',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  misisionDetailTextView: {
    width: '100%',
    height: 120,
    backgroundColor: 'grey',
    borderRadius: 28,
    padding: '3%',
  },
  titleHeading: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 8,
  },
  titleTxt: {
    fontSize: 56,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  detailView: {
    width: '100%',
    // height: '100%',
    justifyContent: 'center',
    //backgroundColor: 'purple',
    alignItems: 'center',
    marginBottom: 28,
  },
  data: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollView: {
    //backgroundColor: 'red',
    width: '100%',
    marginTop: 5,
  },
  astronautImage: {
    width: '100%',
    height: '100%',
    // aspectRatio: 1,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,

    resizeMode: 'center',
  },
  pictureView: {
    height: 50,
    width: '100%',
    // position: 'relative',
    // flex: 1,
    //backgroundColor: 'yellow',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  backSignTxt: {
    fontSize: 30,
    color: 'white',
  },
  watch: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  back: {
    marginTop: 10,
    fontSize: 10,
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: 'green',
    paddingTop: '10%',
    paddingBottom: '3%',
    paddingHorizontal: '3%',
  },

  watchbuttons: {
    backgroundColor: 'red',
    height: '80%',
    width: '30%',
    flexDirection: 'row',
    // marginVertical: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // padding:40
  },
  backbuttons: {
    // backgroundColor: 'grey',
    height: 30,
    width: '30%',
    flexDirection: 'row',
    // marginVertical: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    // padding:40
  },
});
