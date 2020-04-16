import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import actions from '../action';
import {connect} from 'react-redux';
import NavigationUtil from '../navigator/NavigationUtil';

class MyPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>MyPage</Text>
        <Button
          title="修改主题"
          onPress={() => this.props.onThemeChange('#8a3')}
        />
        <Text
          onPress={() => {
            NavigationUtil.goPage(
              {navigation: this.props.navigation},
              'DetailPage',
            );
          }}>
          跳转到详情页
        </Text>
        <Button
          title={'Fetch Use'}
          onPress={() => {
            NavigationUtil.goPage(
              {navigation: this.props.navigation},
              'FetchDemoPage',
            );
          }}
        />
        <Button
          title={'AsyncStorage Use'}
          onPress={() => {
            NavigationUtil.goPage(
              {navigation: this.props.navigation},
              'AsyncStorageDemoPage',
            );
          }}
        />
        <Button
          title={'DataStore Use'}
          onPress={() => {
            NavigationUtil.goPage(
              {navigation: this.props.navigation},
              'DataStoreDemoPage',
            );
          }}
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
