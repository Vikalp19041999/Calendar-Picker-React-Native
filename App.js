import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null
    };
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : ''
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange.bind(this)}
        />
        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  }
})