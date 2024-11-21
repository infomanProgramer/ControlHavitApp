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

// const daysOfWeekBody = [
//     {key: 1, keyDay: 1, value: '1'},
//     {key: 2, keyDay: 2, value: '2'},
//     {key: 3, keyDay: 3, value: '3'},
//     {key: 4, keyDay: 4, value: '4'},
//     {key: 5, keyDay: 5, value: '5'},
//     {key: 6, keyDay: 6, value: '6'},
//     {key: 7, keyDay: 7, value: '7'},
//     {key: 8, keyDay: 1, value: '8'},
//     {key: 9, keyDay: 2, value: '9'},
//     {key: 10, keyDay: 3, value: '10'},
//     {key: 11, keyDay: 4, value: '11'},
//     {key: 12, keyDay: 5, value: '12'},
//     {key: 13, keyDay: 6, value: '13'},
//     {key: 14, keyDay: 7, value: '14'},
//     {key: 15, keyDay: 1, value: '15'},
//     {key: 16, keyDay: 2, value: '16'},
//     {key: 17, keyDay: 3, value: '17'},
//     {key: 18, keyDay: 4, value: '18'},
//     {key: 19, keyDay: 5, value: '19'},
//     {key: 20, keyDay: 6, value: '20'},
//     {key: 21, keyDay: 7, value: '21'},
//     {key: 22, keyDay: 1, value: '22'},
//     {key: 23, keyDay: 2, value: '23'},
//     {key: 24, keyDay: 3, value: '24'},
//     {key: 25, keyDay: 4, value: '25'},
//     {key: 26, keyDay: 5, value: '26'},
//     {key: 27, keyDay: 6, value: '27'},
//     {key: 28, keyDay: 7, value: '28'}
// ];



export const MonthCalendar = ({mes}) => {
  return (
    <View style={styles.calendarMainContainer}>
        <Text style={{alignSelf: 'center'}}>{mes.month}</Text>
        <View style={styles.calendarHeader}>
            {daysOfWeekHeader.map(day => (
                <View key={day.key} style={styles.dayOfWeek}>
                    <Text style={styles.dayOfWeekText}>{day.value}</Text>
                </View>
            ))}
        </View>
        <View style={styles.calendarBody}>
            {mes.daysOfWeekBody.map(day => (
                <View key={day.key} style={[styles.dayOfWeek, {backgroundColor: day.keyDay % 2 === 0? '#F8EDED' : 'transparent'}]}>
                    <Text style={day.realizado?styles.habitMark:""}>{day.value == 0? "": day.value}</Text>
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
