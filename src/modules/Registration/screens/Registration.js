//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,KeyboardAvoidingView } from 'react-native';
import { FormSteps, ScreenFormStep } from '../../../utils/FormSteps';
import { width , height , font } from '../../../utils/responsive';

//components
import Input from '../../../components/Input';
import Header from '../../../components/FormSteps/Header';
import Card from '../../../components/FormSteps/Card';
import SelectedData from '../../../components/FormSteps/SelectedData';
import PhoneNumber from '../../../components/FormSteps/PhoneNumber';
import PasswordInput from '../../../components/FormSteps/PasswordInput';
import Company from '../../../components/FormSteps/Company';

const data = [
    {"label": 'Item 1', "value": 'item1'},
    {"label": 'Item 2', "value": 'item2'},
];

const stateObject = [
    {
        label: "Egypt", value:[ 
            {label: "Cairo", value: "Cairo"},
            {label: "Alex", value: "Alex"},
            {label: "Aswan", value: "Aswan"}
        ]
    },
    {
        label: "KSA A", value: [
            {label: "ALMADINA", value: "ALMADINA"},
            {label: "GADA", value: "GADA"},
        ]
    }
];

const countryPhone = [
    {label: 'egypt', value: '+20'},
    {label: 'KSA', value: '+966'},
];

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            companyCauntry:"",
            phoneNumber:"",
            phoneNumberCode:"",
            userPassword:"",
            userPasswordRepat:"",
            countryPhone:"",
            country: "",
            city: "",
            company:"",
            lang:"",    
            error: false,
        }

    }

    componentDidUpdate()
    {
        console.log(this.state.phoneNumber)
        console.log(this.state.phoneNumberCode)
        if(this.props.userPassword ==! this.state.userPasswordRepat)
        {
            console.log('errors')
        }
    }

    handleChange =  key => val => { 
        this.setState({[key]:val})
    }

  render() {
    let citys ;
     if ( this.state.country) {
        citys = this.state.country.value;
        console.log('work')
      } else {
        citys = [{label: '', value: ''}]
    }
    
    

    return (
          <View style={styles.Registration}>
            <View style={styles.containerForm}>
                <KeyboardAvoidingView
                    style = {{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "position" } 
                    keyboardVerticalOffset = { Platform.OS === "ios" ? height('0%') : '' }
                >  
                <FormSteps>
                    <ScreenFormStep 
                        iconName="user"
                        iconSize={font(18)}
                        iconColorIsCompleted={"#0000ff"}
                        iconColorIsActive={"#f00"}
                        activeStepIconColor={"#fff"}
                        activeStepIconBorderColor={"#f00"}
                        completedStepIconColor={"#fff"}
                        completedProgressBarColor={"#0000ff"}
                        completedStepIconBorderColor={"#0000ff"}
                        progressBarColor={"#fff"}
                        disabledStepIconColor={"#fff"}
                    >  
                        <Header
                            title='Tell us more about you.'
                        />
                        <Card>

                            <Input
                                label="FULL NAME"
                                placeholder="Enter your full name"
                                placeholderTextColor="#777"
                                value={this.state.fullName}
                                handleChange={(this.handleChange('fullName'))}
                                errorMessage="error bro"
                                error={true}
                            />

                            <Input
                                label="BUSINESS EMAIL"
                                placeholder="Enter your business email"
                                placeholderTextColor="#777"
                                value={this.state.email}
                                handleChange={(this.handleChange('email'))}
                                keyboardType='email-address'
                            />

                            <SelectedData
                                labelSelected="COUNTRY"
                                data={countryPhone}
                                handleChange={(this.handleChange('companyCauntry'))}
                                placeholder="Choose your country"
                            />

                            <PhoneNumber
                                label="PHONE NUMBER"
                                placeholder="Enter your phone number"
                                placeholderTextColor="#777"
                                codeNumber="+20"
                                codeNumberValue={this.state.companyCauntry.value}
                                handleChange={(this.handleChange('phoneNumber'))}
                                handleChangeCode={(this.handleChange('phoneNumberCode'))}
                            />

                            <PasswordInput
                                label="PASSWORD"
                                placeholder='Choose a password'
                                iconSize="16"
                                value={this.state.password}
                                onChangeText={this.handleChange('userPassword')}
                            />

                            <PasswordInput
                                label="REPEAT PASSWORD"
                                placeholder='Repat a password'
                                iconSize="16"
                                value={this.state.passwordRepat}
                                onChangeText={this.handleChange('userPasswordRepat')}
                            />
                        </Card>
                    
                    </ScreenFormStep>

                    <ScreenFormStep 
                       iconName="building"
                       iconSize={font(15)}
                       iconColorIsCompleted={"#0000ff"}
                       iconColorIsActive={"#f00"}
                       activeStepIconColor={"#fff"}
                       activeStepIconBorderColor={"#f00"}
                       completedStepIconColor={"#fff"}
                       completedProgressBarColor={"#0000ff"}
                       completedStepIconBorderColor={"#0000ff"}
                       progressBarColor={"#fff"}
                       disabledStepIconColor={"#fff"}
                    >
                        <Header
                            title='Verify your company'
                            size={12}
                        />
                        <Card>
                            <Header
                                title='Entering this information correctly will fac the company'
                                size={9}
                                color="#999"
                            />

                            <Company 
                                label='Company Name'
                                placeholder="Enter your company Name"
                                placeholderTextColor="#777"
                                data={data}
                                handleChange={(this.handleChange('company'))}
                                handleSelected={(this.handleChange('lang'))}
                                
                            />

                            <Input
                                label="ADDREES"
                                placeholder="Enter your address"
                                placeholderTextColor="#777"
                                handleSelected={(this.handleChange('address'))}
                                rootStyle={{ zIndex : -1 }}
                            />

                            <Input
                                label="BUSINESS EMAIL"
                                placeholder="Enter your business email"
                                placeholderTextColor="#777"
                                handleSelected={(this.handleChange('address'))}
                            />     

                            <View style={styles.containerCountry}>
                                <SelectedData
                                    rootStyle={{ width : '49%' }}
                                    labelSelected="COUNTRY"
                                    data={stateObject}
                                    handleChange={(this.handleChange('country'))}
                                    placeholder="Choose your country"
                                    placeholderStyle={styles.placeholderStyle}
                                /> 
                                <SelectedData
                                    rootStyle={{ width : '49%' }}
                                    labelSelected="CITY"
                                    data={citys}
                                    handleChange={(this.handleChange('city'))}
                                    placeholder="Choose your city"
                                    placeholderStyle={styles.placeholderStyle}
                                /> 
                            </View>
                            <PhoneNumber
                                label="COMPANY PHONE NUMBER"
                                labelStyle={{ fontSize : font('9') }}
                                placeholder="Enter your phone number"
                                placeholderTextColor="#777"
                                codeNumber="+20"
                                codeNumberValue={this.state.companyCauntry.value}
                            />
                            <PhoneNumber
                                label="COMPANY PHONE NUMBER"
                                labelStyle={{ fontSize : font('9') }}
                                placeholder="Enter your phone number"
                                placeholderTextColor="#777"
                                codeNumber="+20"
                                codeNumberValue={this.state.countryPhone.value}
                            />
                        </Card>
                    </ScreenFormStep>
                    <ScreenFormStep 
                        iconName="shield-checkmark-outline"
                        iconType="Ionicons"
                        iconSize={font(18)}
                        iconColorIsCompleted={"#0000ff"}
                        iconColorIsActive={"#f00"}
                        activeStepIconColor={"#fff"}
                        activeStepIconBorderColor={"#f00"}
                        completedStepIconColor={"#fff"}
                        completedProgressBarColor={"#0000ff"}
                        completedStepIconBorderColor={"#0000ff"}
                        progressBarColor={"#fff"}
                        disabledStepIconColor={"#fff"}
                    >
                        <Header
                            title='Youre all set. Ready?'
                            size={14}
                            color="#000"
                        />

                        <Card>
                            <Header
                                title='We will send a message for this e-mail'
                                size={13}
                                color="#f00"
                            />
                            <Header
                                title='example@example.com'
                                size={13}
                            />
                        </Card>
                    </ScreenFormStep>
                </FormSteps>
                </KeyboardAvoidingView>
            </View>
        </View>          
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    Registration: {
        flex: 1,
        backgroundColor: '#eee',
    },
    containerForm : {
        marginTop : height('2%'),
        height : '100%'
    },
    containerCountry : {
        width: '100%', 
        flexDirection : 'row', 
        justifyContent : 'space-between'
    },
    placeholderStyle : {
        fontSize : font('8')
    }
});

export default Registration;
