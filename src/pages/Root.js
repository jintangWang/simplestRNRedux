import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  View,
  Text,
  Button
} from 'react-native';
import * as actions from '../redux/actions'

class Root extends Component{

  render() {
    const {dispatch} = this.props
    console.log(this.props)
    return (
      <View>
        <Button title="登陆" onPress={() => dispatch(actions.login('登陆成功'))}/>
        <Text>{this.props.login.text}</Text>
        <Button title="注销" onPress={() => dispatch(actions.logout('注销成功'))}/>
        <Text>{this.props.logout.text}</Text>
      </View>
    );
  }
}

function select(state) {
  return {
    login: state.login,
    logout: state.logout
  }
}

export default connect(select)(Root);