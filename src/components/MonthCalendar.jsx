import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const daysOfWeekHeader = [
    {key: 1, value: 'LU'},
    {key: 2, value: 'MA'},
    {key: 3, value: 'MI'},
    {key: 4, value: 'JU'},
    {key: 5, value: 'VI'},
    {key: 6, value: 'SA'},
    {key: 7, value: 'DO'}
];

export const MonthCalendar = ({mes}) => {
  return (
    <View style={styles.calendarMainContainer}>
        <Text style={{alignSelf: 'center', color: 'black'}}>{mes.month}</Text>
        <View style={styles.calendarHeader}>
            {daysOfWeekHeader.map(day => (
                <View key={day.key} style={styles.dayOfWeek}>
                    <Text style={styles.dayOfWeekText}>{day.value}</Text>
                </View>
            ))}
        </View>
        <View style={styles.calendarBody}>
            {mes.daysOfWeekBody.map(day => (
                <View key={day.key} style={[styles.dayOfWeek, {backgroundColor: day.keyDay % 2 === 0? 'transparent' : '#F8EDED'}]}>
                    <Text style={day.realizado?styles.habitMark:styles.habitNormal}>{day.value == 0? "": day.value}</Text>
                </View>
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    calendarMainContainer: {
        width: '100%',
        height: 'auto'
    },
    calendarHeader: {
        flexDirection: 'row',
    },
    calendarBody: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    dayOfWeek: {
        width: '14.28%',
        height: 40,
        backgroundColor: '#379777',
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    dayOfWeekText: {
        color: 'white',
        fontWeight: 'bold',
    },
    habitNormal: {
        color: 'black',
    },
    habitMark: {
        width: 24,
        height: 24,
        borderRadius: 15,
        borderColor: "#DFDFE5",
        borderWidth: 1,
        backgroundColor: '#6482AD',
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
    }
});
