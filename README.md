# simplestRNRedux

> 没有中间件、没有异步操作、没有页面跳转，只在一个页面改变store并显示,所以称作最简单的React-Native Redux实例

效果：

![效果图](http://7xphbb.com1.z0.glb.clouddn.com/simplestRNRedux.gif)

此页面代码：
``` js
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
```

以后改进：

- [ ] 添加中间件支持异步操作
- [ ] 结合`react-navigation`使用
