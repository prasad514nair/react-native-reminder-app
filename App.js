import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from "./EventList";
import {
    createStackNavigator,
} from 'react-navigation';
import EventForm from "./EventForm";

/*export default class App extends React.Component {
  render() {
    return (
      <EventList/>
    );
  }
}*/

const App = createStackNavigator({
    list:{
      screen: EventList,
        navigationOptions: ()=>({
            title: 'Your Events',
        })
    },
    form:{
        screen: EventForm,
        navigationOptions: () => ({
            title: 'Add an event',
        }),
    }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;