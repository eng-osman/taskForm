import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { font, height } from '../../utils/responsive'
import Input from '../Input';

const PhoneNumber = ({ 
    label,  
    labelStyle,
    placeholder,
    placeholderTextColor,
    codeNumber,
    codeNumberValue,
    rootStyle,
    handleChange,
    handleChangeCode,
    error,
    iconSize,
    ...restProps 
}) => {
    const [showPassword, setShowPassowrd] = useState(false);

    return(
        <View style={[styles.root,rootStyle]}>
            <Input
                rootStyle={{ width : '25%' }}
                containerStyle={styles.containerStyleCode}
                value={codeNumberValue}
                placeholder={codeNumber}
                inputStyle={{ fontSize: 5 }}
                onChangeText={handleChangeCode}
            />
            <Input
                label={label}
                labelStyle={labelStyle}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                rootStyle={{ width : '75%' }}
                containerStyle={styles.containerStylePhone}
                onChangeText={handleChange}
                {...restProps}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    root : {
       width : '100%',
       flexDirection:'row',
       zIndex : -1
    },
    containerStyleCode : {
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        paddingTop:font('7'),
        paddingLeft: font('15'),
        height: font('46'),
    },
    containerStylePhone : {
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        height: font('46'),
    },

});
export default PhoneNumber;