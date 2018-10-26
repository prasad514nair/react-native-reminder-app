import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight, TextInput, StyleSheet,
} from 'react-native';
import {formatDateTime, saveEvent} from "./api";
import DateTimePicker from 'react-native-modal-datetime-picker'

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    text: {
        height: 40,
        // borderWidth: 1,
        margin: 0,
        marginLeft: 7,
        marginRight: 7,
        paddingLeft: 10,
    },
    borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 0.5,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

class EventForm extends Component{
    state = {
        title: null,
        date: '',
        showDatePicker: false,
    };

    handleAddPress = () =>{
        saveEvent(this.state)
            .then(() => this.props.navigation.goBack());
    };

    handleChangeTitle = (value) =>{
     this.setState({title: value});
    };

    handleDatePress = () =>{
        this.setState({showDatePicker: true});
    };

    handleDateTimePicked = (date) =>{
        this.setState({date,});
        this.handleDateTimeHide();
    }

    handleDateTimeHide = ()=>{
        this.setState({showDatePicker: false});
    }
    render(){
        return(
            <View style={{
                flex:1,
            }}>

                <View style={styles.fieldContainer}>
                    <TextInput
                        placeholder="Event Title"
                        spellCheck={false}
                        value={this.state.title}
                        onChangeText={this.handleChangeTitle}
                        style={styles.text}/>

                    <TextInput
                        placeholder="Event Date"
                        spellCheck={false}
                        value={formatDateTime(this.state.date.toString())}
                        editable={!this.state.showDatePicker}
                        onFocus={this.handleDatePress}
                        style={[styles.text, styles.borderTop]}/>
                    <DateTimePicker
                        isVisible={this.state.showDatePicker}
                        mode="datetime"
                        onConfirm={this.handleDateTimePicked}
                        onCancel={this.handleDateTimeHide}
                    />

                </View>

                <TouchableHighlight
                    onPress={this.handleAddPress}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export  default EventForm;