import React from 'react';
import { View } from 'react-native';
import {font, height} from '../responsive'

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', marginTop: 90 }}>
    <View style={{ position: 'absolute', left: font('120'), bottom: font('20') }}>{props.renderPreviousButton()}</View>
    <View style={{ position: 'absolute', right: font('9'), bottom: font('20') }}>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;