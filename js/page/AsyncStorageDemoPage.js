import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
} from 'react-native';

const KEY = 'save_key';
export default class AsyncStorageDemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>AsyncStoragenali Use</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            this.value = text;
          }}
        />
        <View style={styles.input_container}>
          <Text
            onPress={() => {
              this.doSave();
            }}>
            存储
          </Text>
          <Text
            onPress={() => {
              this.doRemove();
            }}>
            删除
          </Text>
          <Text
            onPress={() => {
              this.getDatas();
            }}>
            获取
          </Text>
        </View>
        <Text>{this.state.showText}</Text>
      </View>
    );
  }

  doSave() {
    AsyncStorage.setItem(KEY, this.value, (error) => {
      error && console.log(error.toString());
    });
  }

  doRemove() {
    AsyncStorage.removeItem(KEY, (error) => {
      error && console.log(error.toString());
    });
  }

  getDatas() {
    AsyncStorage.getItem(KEY, (error, value) => {
      this.setState({
        showText: value,
      });
    });
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
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
