import React, { Component } from 'react';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation';
import Evilicon from 'react-native-vector-icons/EvilIcons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'

class ProgressIcon extends Component {

    constructor(props) {
        super(props)
    }

    renderIcon() {
        if (this.props.type == 'font-awesome') {
            return  <FontAwesome 
                        {...this.props}
                    />;
        }
        else if (this.props.type == 'material')
        {
            return  <MaterialIcons
                        {...this.props}
                    />
        }
        else if (this.props.type == 'font-awesome5')
        {

            return  <FontAwesome5
                        {...this.props}
                        regular
                        style={ this.props.colorProgress }
                    />
        }
        else if (this.props.type == 'material-community')
        {
            const color = this.props.colorProgress

            return  <MaterialCommunityIcons
                        {...this.props}
                        style={ this.props.colorProgress }
                    />
        }
        else if (this.props.type == 'Ionicons')
        {
            return  <Ionicons
                        {...this.props}
                        style={ this.props.colorProgress }
                    />
        }
        else if (this.props.type == 'foundation')
        {
            return  <Foundation
                        {...this.props}
                        style={ this.props.colorProgress }
                    />
        }
        else if (this.props.type == 'evilicon')
        {
            return  <Evilicon
                        {...this.props}
                        style={ this.props.colorProgress }
                    />
        }
        else if (this.props.type == 'antdesign')
        {
            return  <Antdesign
                        {...this.props}
                        style={ this.props.colorProgress }
                    />
        }
        else if (this.props.type == 'entypo')
        {
            return  <Entypo
                        {...this.props}
                        style={ this.props.colorProgress }
                    />
        }else { 
            return  <FontAwesome
                        {...this.props}
                        style={ this.props.colorProgress }
                    />
        }
    }

    render()
    {   
        return (
            <View style={this.props.containerStyle}>
                {this.renderIcon()}
            </View>
        )
    }
}

export default ProgressIcon;