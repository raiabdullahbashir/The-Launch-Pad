
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

export default function Databases({navigation}) {
  const back = '<';
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backbuttons} onPress={() => navigation.navigate('HOME')}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
            }}>
            {back}
          </Text>
          <Text
            style={{
              marginTop:10,
              fontSize: 10,
              color: 'white',
            }}>
            BACK
          </Text>
        </TouchableOpacity>
        <View style={styles.upperView}>
          <View style={styles.secondView}>
            <TouchableOpacity style={styles.leftbuttons} onPress={() => navigation.navigate('AstronautDatabase')}>
              <Text style={styles.text}>ASTRONAUTS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightView}>
            <TouchableOpacity style={styles.rightbuttons}>
              <Text style={styles.text}>ROCKETS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightbuttons}>
              <Text style={styles.text}>ENGINES</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lowerView}>
          <TouchableOpacity style={styles.lowerbuttons}>
            <Text style={styles.text}>AGENCIES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lowerbuttons}>
            <Text style={styles.text}>LAUNCH SITES</Text>
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
    width: '97%',
    flexDirection: 'row',
    // marginVertical: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    // padding:40
  },
  lowerbuttons: {
    backgroundColor: 'grey',
    height: 150,
    // padding:'10%',
    width: '49%',
    // marginVertical:3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    borderRadius: 20,
    // padding:40
  },
  leftbuttons: {
    backgroundColor: 'grey',
    height: 304,
    width: '97%',
    // marginVertical: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    // padding:40
  },
  rightbuttons: {
    backgroundColor: 'grey',
    height: 150,
    width: '98%',
    margin: 3,
    // padding:'10%',
    // marginVertical:3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    // padding:40
  },
  lowerView: {
    // backgroundColor: 'yellow',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // height:'100%',
    flexDirection: 'row',
    margin:3,
  },

  rightView: {
    // backgroundColor: 'red',
    width: '50%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // margin:5,
  },
  secondView: {
    width: '50%',
    // height: '80%',
    // borderRadius: 20,
    // backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '5%',
    // flex:1
  },
  upperView: {
    flexDirection: 'row',
    width: '100%',
    // height:'100%',
    flex: 1,
    // backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingVertical: '12%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  },
});
