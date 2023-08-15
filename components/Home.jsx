import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CounterComponent from './CounterComponent';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  handleTotalChange = (value) => {
    this.setState(prevState => ({
      total: prevState.total + value,
    }));
  };

  handleShowTotal = () => {
    alert(`Total Count: ${this.state.total}`);
  };

  render() {
    const { total } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <CounterComponent
            name="1"
            onChange={this.handleTotalChange}
          />
        </View>
        <View style={styles.box}>
          <CounterComponent
            name="2"
            onChange={this.handleTotalChange}
          />
        </View>
        <View style={styles.box}>
          <CounterComponent
            name="3"
            onChange={this.handleTotalChange}
          />
        </View>
        <Text style={styles.total}>Total Count: {total}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  box: {
    marginBottom: 20,
    width: '80%',
  },
  total: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Home;
