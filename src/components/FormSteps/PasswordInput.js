//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet ,Platform } from 'react-native';
import { font, height } from '../../utils/responsive';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const PasswordInput = ({
    label, 
    placeholder,
    value,
    handleChange,
    error,
    iconSize,
    ...restProps
}) => {
    const [showPassword, setShowPassowrd] = useState(false);

    return (
        <View style={styles.root}>
            <Input
                label={label}
                labelStyle={styles.labelStyle}
                placeholder={placeholder}
                placeholderTextColor = '#000'
                inputStyle={{fontSize : font('12') }}
                inputContainerStyle={{ borderBottomWidth : 0  }}
                containerStyle = {[styles.containerStyle , { borderColor : error ?'red' : '#D5D9E5' }]}
                errorStyle={{ color: 'red' }}
                rightIcon={
                    <Icon
                        name={showPassword ? "eye-off" : "eye"}
                        size={font(iconSize)}
                        color={ error ? 'red' : '#647698'}
                        onPress={() => setShowPassowrd(!showPassword)}
                    />
                }
                secureTextEntry={!showPassword}
                value={value}
                onChangeText={handleChange}
                {...restProps}
            />
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    root : {
        width : '100%',
        marginBottom : height('1%')
    },
    labelStyle : {
        paddingRight : font('10') , 
        fontSize : font('10') , 
        color : '#ADB5D1',
        paddingTop : Platform.OS === 'ios' ? null : font('2'),
    },
    containerStyle : {
        paddingTop : Platform.OS === 'ios' ? font('4') : font('1')  , 
        borderWidth : 1 ,
        borderRadius : 5 ,
        height: font('51'),
    },
    
});

//make this component available to the app
export default PasswordInput;
