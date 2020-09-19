import React from 'react';
import { View, StyleSheet } from 'react-native';

import { font, height } from '../../utils/responsive'

import Input from '../Input';
import SelectedData from './SelectedData';

const Company = ({ 
    labelSelected, 
    handleChange, 
    handleSelected,
    data, 
    label, 
    placeholder,
    placeholderTextColor,
    value,
    error,
    containerStyle,
    ...restProps
}) => (
    <View style={styles.root}>
        <Input
            containerStyle={styles.styleInputCompany}
            rootStyle={{ width : '70%' }}
            label={label}
            placeholder={placeholder}
            placeholderTextColor = {placeholderTextColor}
            containerStyle = {containerStyle}
            value={value}
            onChangeText={handleChange}
            {...restProps}
        />
        <SelectedData
            rootStyle={styles.SelectedRoot}
            labelSelected={labelSelected}
            data={data}
            handleChange={handleSelected}
            placeholder="English"
            placeholderStyle={styles.placeholderStyle}
            labelStyle={styles.labelStyle}
        />
    </View>
);

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flexDirection:'row'
    },
    styleInputCompany: {
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        paddingTop:font('7'),
        paddingLeft: font('15'),
        height: font('49'),
    },
    SelectedRoot : {
        width : '30%'
    },
    placeholderStyle : {
        paddingTop : font('12')
    },
    labelStyle : {
        paddingTop : font('12') ,
        right: 0  
    }
});

export default Company;
