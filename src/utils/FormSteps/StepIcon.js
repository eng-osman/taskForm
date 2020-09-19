import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from './ProgressIcon';

import PropTypes from 'prop-types';

class StepIcon extends Component {
  render() {
    let styles;

    if (this.props.isActiveStep) {
      styles = {
        circleStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          padding : 5,
          backgroundColor: this.props.activeStepIconColor,
          borderColor: this.props.activeStepIconBorderColor,
          justifyContent:'center',
          borderWidth: 2,
          zIndex: 99999,
        },
        circleText: {
          alignSelf: 'center',
          top: 5 / 2,
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.activeLabelColor,
          fontSize: this.props.activeLabelFontSize || this.props.labelFontSize,
        },
        leftBar: {
          position: 'absolute',
          top: 40 / 2.22,
          left: 0,
          right: 40 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: 40 / 2 + 2,
        },
        rightBar: {
          position: 'absolute',
          top: 40 / 2.22,
          right: 0,
          left: 40 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: 40 / 2 + 2,
        },
        stepNum: {
          color: this.props.activeStepNumColor,
        },
        iconColor : {
          color : this.props.iconColorIsActive
        }
      };
    } else if (this.props.isCompletedStep) {
      styles = {
        circleStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          padding : 5,
          backgroundColor: this.props.completedStepIconColor,
          borderColor: this.props.completedStepIconBorderColor,
          justifyContent:'center',
          borderWidth: 2,
          zIndex: 99999,
        },
        circleText: {
          alignSelf: 'center',
          top: 5 / 2,
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.completedLabelColor,
          marginTop: 4,
          fontSize: this.props.labelFontSize,
        },
        leftBar: {
          position: 'absolute',
          top: 36 / 2,
          left: 0,
          right: 36 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: 36 / 2 + 4,
        },
        rightBar: {
          position: 'absolute',
          top: 36 / 2,
          right: 0,
          left: 36 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginLeft: 36 / 2 + 4,
        },
        stepNum: {
          color: this.props.completedStepNumColor,
        },
        iconColor : {
          color : this.props.iconColorIsCompleted
        }
      };
    } else {
      styles = {
        circleStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          padding : 5,
          backgroundColor: this.props.disabledStepIconColor,
          justifyContent:'center',
          zIndex: 99999,
        },
        circleText: {
          alignSelf: 'center',
          top: 5 / 2,
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.labelColor,
          marginTop: 4,
          fontSize: this.props.labelFontSize,
        },
        leftBar: {
          position: 'absolute',
          top: 36 / 2,
          left: 0,
          right: 36 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginRight: 36 / 2 + 4,
        },
        rightBar: {
          position: 'absolute',
          top: 36 / 2,
          right: 0,
          left: 36 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: 36 / 2 + 4,
        },
        stepNum: {
          color: this.props.disabledStepNumColor,
        },
        iconColor : {
          color : this.props.iconColorIsDisabled
        }
      };
    }

    return (
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <View style={styles.circleStyle}>
          <Text style={styles.circleText}>
                <Text style={{ color: this.props.completedCheckColor }}>
                    { 
                        this.props.iconName 
                        ?
                          <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }}>
                            <Icon 
                                name={this.props.iconName} 
                                size={this.props.iconSize} 
                                colorProgress={styles.iconColor} 
                                type={this.props.iconType}
                            />
                          </View> 
                        :
                            <Icon 
                                name='check' 
                                size={20} color='white' 
                            />
                    }
                 
                </Text>
          </Text>
        </View>
        <Text style={styles.labelText}>{this.props.label}</Text>
        {!this.props.isFirstStep && <View style={styles.leftBar} />}
        {!this.props.isLastStep && <View style={styles.rightBar} />}
      </View>
    );
  }
}



StepIcon.defaultProps = {
  borderWidth: 2,
  borderStyle: 'solid',
  activeStepIconBorderColor: '#fff',

  progressBarColor: '#ebebe4',
  completedProgressBarColor: '#4BB543',

  activeStepIconColor: 'transparent',
  completedStepIconColor: '#000',
  disabledStepIconColor: '#ebebe4',

  labelColor: 'lightgray',
  labelFontSize: 14,
  activeLabelColor: '#4BB543',
  completedLabelColor: 'lightgray',

  activeStepNumColor: 'black',
  completedStepNumColor: 'black',
  disabledStepNumColor: 'white',

  completedCheckColor: 'white',


  iconColorIsActive: '#f00',
  iconColorIsCompleted: '#f00',
  iconColorIsDisabled: '#999'
};
export default StepIcon;