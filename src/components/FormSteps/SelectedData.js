import React, { useState ,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { width, height, font } from '../../utils/responsive';

// create a component
const SelectedData = ({ 
    labelSelected, 
    handleChange, 
    data, 
    styleSelected, 
    placeholder, 
    rootStyle,
    placeholderStyle,
    labelStyle
}) => {

    const [value, setValue] = useState();
    const [items, setItems] = useState(data);

    useEffect(
        () => {
            setItems(data);
        }, [data]);
      
    return (
        <View style={[styles.rootStyle,rootStyle]}>
            { labelSelected ? <Text style={styles.labelSelected}>{labelSelected}</Text> : null}
            <DropDownPicker
                items={items}
                style={[styles.containerSeleted,styleSelected]}              
                onChangeItem={(item)=> { setValue(item.value) }}
                placeholder={placeholder}
                placeholderStyle={placeholderStyle}
                labelStyle={[styles.labelStyle,labelStyle]}
                onChangeItem={handleChange}
                arrowSize={font('14')}
                arrowStyle={ (labelSelected) ? {bottom : font('0'), height : font('15')} : {top : font('5')} }
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    rootStyle : {
        width: '100%',
        borderWidth : 1 ,
        borderColor: '#D5D9E5',
        borderRadius : font('3') ,
        marginBottom :  height('1%')
    },
    labelSelected:{
        fontSize: font('9'),
        fontWeight: 'bold',
        paddingLeft : font('6'),
        paddingTop: font('7'),
    },
    containerSeleted: {
        height: '100%',
        borderWidth : 0,
    },
    labelStyle :{
        color : '#999', 
        fontWeight:'bold',
        fontSize : font('10'),
        right: font('5')
    }
});

//make this component available to the app
export default SelectedData;
