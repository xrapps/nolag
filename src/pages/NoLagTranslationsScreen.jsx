import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import NoLagHeader from '../components/NoLagHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>

      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <NoLagHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('ITTF World Cup', '01.04 16:00', 'Ma Long \n' + 'Fan Zhendong')}
        {renderBroadcast('European Championship', '04.04 18:30', 'Timo Boll \n' + 'Dimitrij Ovtcharov')}
        {renderBroadcast('Asian Cup', '07.04 20:00', 'Jun Mizutani \n' + 'Xu Xin')}
        {renderBroadcast('Pan American Games', '10.04 17:45', 'Hugo Calderano \n' + 'Kanak Jha')}
        {renderBroadcast('World Tour Finals', '13.04 21:00', 'Chen Meng \n' + 'Mima Ito')}
        {renderBroadcast('Olympic Qualifier', '16.04 19:15', 'Tomokazu Harimoto \n' + 'Wang Chuqin')}
        {renderBroadcast('Commonwealth Games', '19.04 16:30', 'Liam Pitchford \n' + 'Quadri Aruna')}
        {renderBroadcast('African Championship', '22.04 20:00', 'Omar Assar \n' + 'Ahmed Saleh')}
        {renderBroadcast('Junior World Cup', '25.04 17:45', 'Lin Yun-Ju \n' + 'Kristian Karlsson')}
        {renderBroadcast('Mixed Doubles Final', '28.04 19:00', 'Xu Xin/Sun Yingsha \n' + 'Mizutani/Ito')}

      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 12,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    width: '40%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.main,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    paddingVertical: 5,
  },
});
