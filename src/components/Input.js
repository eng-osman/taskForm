import React from 'react';
import { View, Text, StyleSheet ,Platform } from 'react-native';
import { font, height } from '../utils/responsive';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const TextInput = ({
    label, 
    labelStyle,
    placeholder,
    placeholderTextColor,
    rightIconName,
    leftIconName, 
    iconSize,
    isPassword,
    value,
    handleChange,
    error,
    errorMessage,
    rootStyle,
    containerStyle,
    iconColor,
    inputStyle,
    ...restProps
}) => {
    return (
        <View style={[ (error) ? { marginBottom : font('22') } : {marginBottom : height('1%')} ,styles.root,rootStyle]}>

            <Input
                label={label}
                labelStyle={[styles.labelStyle,labelStyle]}
                placeholder={placeholder}
                placeholderTextColor = {placeholderTextColor}
                containerStyle = {[styles.containerStyle, containerStyle , { borderColor : error ?'red' : '#D5D9E5' }]}
                inputContainerStyle={{ borderBottomWidth : 0  }}
                inputStyle={[inputStyle,{ fontSize : font('12') }]}
                errorStyle={[ (error) ? { bottom: font('0'), fontSize: font('10')} : {}, { color: 'red' }]}
                errorMessage={(error) ? errorMessage : null}
                rightIcon={rightIconName ? (
                    <Icon
                        name={rightIconName}
                        size={font(iconSize)}
                        color={ error ? 'red' : '#647698'}
                    /> 
                ) : null}

                leftIcon={leftIconName ? (
                    <Icon
                        name={leftIconName}
                        size={font(iconSize)}
                        color={[ error ? 'red' : '#647698', iconColor  ? iconColor : '#647698' ]}
                    /> 
                ) : null}
                secureTextEntry={isPassword}
                value={value}
                onChangeText={handleChange}
                {...restProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root :{
        width : '100%',
    },
    labelStyle : {
        paddingRight : font('10') , 
        fontSize : font('10') , 
        color : '#000',
        paddingTop : Platform.OS === 'ios' ? font('2') : font('4')  , 
    },
    containerStyle : {
        paddingTop : Platform.OS === 'ios' ? font('4') : font('1')  , 
        borderWidth : 1 ,
        borderRadius : 5 ,
        height: font('51'),
    },
    
});

//make this component available to the app
export default TextInput;
