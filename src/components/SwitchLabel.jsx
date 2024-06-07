import React, {useState} from 'react'
import {Text, View, Switch, StyleSheet, TouchableOpacity, FlatList, StatusBar, TextInput} from 'react-native';


const SwitchLabel = ({label, toggleSwitch, isEnabled}) => {
    return (
        <View style={{flexDirection: "row", alignItems: "flex-start", width: "90%", marginTop: 25}}>
            <Text style={{color: 'black'}}>{label}</Text>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

export default SwitchLabel;
