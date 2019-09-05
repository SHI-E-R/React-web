import React, {Component} from  'react'
import logo from '../logo.svg';
import './home.less';
import {Statistic, Icon,Rate} from 'antd'

import HookTest  from '../hookTest/hookTest.js'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 999
    }
  }


  handleClick = () => {
    const {num} = this.state
    this.setState({
      num: num + 1
    })
  }
  render () {
    const {num} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            感谢a雄一路手摸手教我搭建！
          </p>
          <a
          className="App-link"
          href="https://www.mrpzx.cn/"
          target="_blank"
          rel="noopener noreferrer"
          >
            go a 雄 主页
          </a>
          <div className='click' onClick={this.handleClick.bind(this)}>
            <Statistic 
              valueStyle={{ color: '#61dafb' }} 
              title="" 
              value={num} 
              prefix={<Icon type="like" />} 
            />
          </div>
          <Rate allowHalf defaultValue={2.5} />
          <HookTest />
        </header>
      </div>
    )
  }
}

export default Home;
