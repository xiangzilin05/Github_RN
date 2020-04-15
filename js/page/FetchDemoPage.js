import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import actions from '../action';
import {connect} from 'react-redux';

export default class FetchDemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: '',
    };
  }
  loadData() {
    let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        this.setState({
          showText: responseText,
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Fetch Use</Text>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              this.searchKey = text;
            }}
          />
          <Button title="获取数据" onPress={() => this.loadData()} />
        </View>
        <Text>{this.state.showText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 30,
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
