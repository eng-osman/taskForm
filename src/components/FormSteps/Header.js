import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { font, height } from '../../utils/responsive'

const Header = ({ title, size, color = "#000",...restProps }) => {
    const [showPassword, setShowPassowrd] = useState(false);

    return(
        <View style={styles.header}>
            <Text 
                {...restProps} 
                style={size ? { fontSize : font(size), color : color } : { fontSize : font('15'), color : color }}
            >
                {title}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header : {
       justifyContent: 'center',
       alignItems:'center',
       marginBottom: font('10')
    }
});
export default Header;