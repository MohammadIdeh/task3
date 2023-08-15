import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
    this.props.onChange(1);
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
    this.props.onChange(-1);
  };

  render() {
    const { name } = this.props;
    const { counter } = this.state;

    return (
      <View style={styles.counterContainer}>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Counter {name}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.handleDecrement}>
              <Text style={styles.button}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{counter}</Text>
            <TouchableOpacity onPress={this.handleIncrement}>
              <Text style={styles.button}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counterContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  box: {
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 10,
    padding: 10,
    width: '80%',
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 24,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  counterValue: {
    fontSize: 20,
  },
});

export default CounterComponent;
