import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import MainStyle from '../GlobalStyles/MainStyle'
import { MonthCalendar } from '../components/MonthCalendar';

const CalendarHabit = ({showScreen, year, mesesGestion}) => {
  return (
    <View style={[MainStyle.container, showScreen?MainStyle.visible:MainStyle.hidden]}>
        <ScrollView style={{width: '96%', height: 'auto'}}>
            <Text style={{backgroundColor: "yellow", alignSelf: "center", fontWeight: 'bold', fontSize: 30}}>Gestion {year}</Text>
            <View style={{flexDirection: "row"}}>
              <View style={{width: "49%", marginRight: '1%', height: 'auto', borderColor: 'black', borderWidth: 1, borderRadius: 10}}>
                <MonthCalendar></MonthCalendar>
              </View>
              <View style={{width: "49%", marginRight: '1%', height: 'auto', borderColor: 'black', borderWidth: 1, borderRadius: 10}}>
                <MonthCalendar></MonthCalendar>
              </View>
            </View>
            <View style={{flexDirection: "row", marginTop: 10}}>
              <View style={{width: "49%", marginRight: '1%', height: 'auto', borderColor: 'black', borderWidth: 1, borderRadius: 10}}>
                <MonthCalendar></MonthCalendar>
              </View>
              <View style={{width: "49%", marginRight: '1%', height: 'auto', borderColor: 'black', borderWidth: 1, borderRadius: 10}}>
                <MonthCalendar></MonthCalendar>
              </View>
            </View>
            <View style={{flexDirection: "row", marginTop: 10}}>
              <View style={{width: "49%", marginRight: '1%', height: 'auto', borderColor: 'black', borderWidth: 1, borderRadius: 10}}>
                <MonthCalendar></MonthCalendar>
              </View>
              <View style={{width: "49%", marginRight: '1%', height: 'auto', borderColor: 'black', borderWidth: 1, borderRadius: 10}}>
                <MonthCalendar></MonthCalendar>
              </View>
            </View>
            <View style={{flexDirection: "row", marginTop: 10}}>
              <View style={{width: "49%", marginRight: '1%', height: 'auto', borderColor: 'black', borderWidth: 1, borderRadius: 10}}>
                <MonthCalendar></MonthCalendar>
              </View>
              <View style={{width: "49%", marginRight: '1%', height: 'auto', borderColor: 'black', borderWidth: 1, borderRadius: 10}}>
                <MonthCalendar></MonthCalendar>
              </View>
            </View>
            <View style={{flexDirection: "row", marginTop: 10}}>
              <View style={{width: "49%", marginRight: '1%', height: 'auto', borderColor: 'black', borderWidth: 1, borderRadius: 10}}>
                <MonthCalendar></MonthCalendar>
              </View>
              <View style={{width: "49%", marginRight: '1%', height: 'auto', borderColor: 'black', borderWidth: 1, borderRadius: 10}}>
                <MonthCalendar></MonthCalendar>
              </View>
            </View>
            <View style={{flexDirection: "row", marginTop: 10, marginBottom: 10}}>
              <View style={{width: "49%", marginRight: '1%', height: 'auto', borderColor: 'black', borderWidth: 1, borderRadius: 10}}>
                <MonthCalendar></MonthCalendar>
              </View>
              <View style={{width: "49%", marginRight: '1%', height: 'auto', borderColor: 'black', borderWidth: 1, borderRadius: 10}}>
                <MonthCalendar></MonthCalendar>
              </View>
            </View>
        </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
    gestion: {
        width: '90%',
        flexDirection: "column",
    }
});

export default CalendarHabit;
