import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '../navigator/NavigationUtil';

export default class PopularPage extends Component {
  constructor(props) {
    super(props);
    this.tabNames = ['java', 'Android', 'iOS', 'React', 'React Native', 'PHP'];
  }

  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: (props) => <PopularTab {...props} tabLabel={item} />,
        navigationOptions: {
          title: item,
        },
      };
    });
    return tabs;
  }

  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(this._genTabs(), {
        tabBarOptions: {
          tabStyle: styles.tabStyle,
          upperCaseLabel: false,
          scrollEnabled: true,
          style: {
            backgroundColor: '#a67',
          },
          indicatorStyle: styles.indicatorStyle,
          labelStyle: styles.labelStyle,
        },
      }),
    );
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}

class PopularTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PopularTab</Text>
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
    marginTop: 35,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tabStyle: {
    minWidth: 50,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6,
  },
});
