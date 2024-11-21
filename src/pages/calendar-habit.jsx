import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MainStyle from '../GlobalStyles/MainStyle';
import {MonthCalendar} from '../components/MonthCalendar';

const CalendarHabit = ({showScreen, year, mesesGestion, descHabito}) => {
  const [cont, setCont] = useState(1);
  return (
    <View
      style={[
        MainStyle.container,
        showScreen ? MainStyle.visible : MainStyle.hidden,
      ]}>
      <ScrollView style={{width: '96%', height: 'auto'}}>
        <Text
          style={{
            backgroundColor: 'yellow',
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Gestion {year}
        </Text>
        <Text
          style={{
            backgroundColor: 'yellow',
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {descHabito}
        </Text>
        {mesesGestion.map((par, key) => (
          <View key={key} style={{flexDirection: 'row'}}>
            {par.map((mes, key) => (
              <View
                key={key}
                style={{
                  width: '49%',
                  marginRight: '1%',
                  height: 'auto',
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 10,
                }}>
                <MonthCalendar mes={mes}></MonthCalendar>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  gestion: {
    width: '90%',
    flexDirection: 'column',
  },
});

export default CalendarHabit;
