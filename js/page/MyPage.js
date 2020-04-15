import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import actions from '../action';
import {connect} from 'react-redux';

class MyPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>MyPage</Text>
        <Button
          title="修改主题"
          onPress={() => this.props.onThemeChange('#8a3')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const mapDispatchToProps = (dispatch) => ({
  onThemeChange: (theme) => dispatch(actions.onThemeChange(theme)),
});
export default connect(null, mapDispatchToProps)(MyPage);
