import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import HomeFieldHeader from '../components/HomeFieldHeader';
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
      <HomeFieldHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'ITTF World',
          '04.05 13:00',
          'Men’s Final \n' + 'Beijing',
        )}
        {renderBroadcast(
          'WTT Grand',
          '06.05 14:45',
          'Women’s Semifinals \n' + 'Singapore',
        )}
        {renderBroadcast(
          'Asian Champ',
          '08.05 16:15',
          'Doubles Final \n' + 'Jakarta',
        )}
        {renderBroadcast(
          'European Champ',
          '10.05 18:30',
          'Mixed Doubles \n' + 'Berlin',
        )}
        {renderBroadcast(
          'US Open',
          '12.05 20:00',
          'Quarterfinals \n' + 'Las Vegas',
        )}
        {renderBroadcast(
          'Olympic Qual.',
          '14.05 22:30',
          'Round of 16 \n' + 'Tokyo',
        )}
        {renderBroadcast(
          'Japan Open',
          '16.05 15:45',
          'Men’s Singles \n' + 'Yokohama',
        )}
        {renderBroadcast(
          'German Open',
          '18.05 17:15',
          'Women’s Singles \n' + 'Düsseldorf',
        )}
        {renderBroadcast(
          'African',
          '20.05 19:00',
          'Final Match \n' + 'Cape Town',
        )}
        {renderBroadcast(
          'Pan Cup',
          '22.05 21:30',
          'Gold Medal Match \n' + 'São Paulo',
        )}
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
    color: COLORS.main,
    paddingVertical: 5,
  },
});
