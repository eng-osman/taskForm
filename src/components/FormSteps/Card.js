import React from 'react';
import { View, StyleSheet } from 'react-native';
import { font, width, height } from '../../utils/responsive'

const Card = ({children}) => {
    return(
        <View style={styles.card}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    card : {
       justifyContent: 'center',
       alignItems:'center',
       backgroundColor : '#fff',
       marginHorizontal : width('5%'),
       padding: font('10'),
       borderRadius: font('3')
    }
});
export default Card;