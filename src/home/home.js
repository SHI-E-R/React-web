import React, {Component} from  'react'
import logo from '../logo.svg';
import './home.less';

class Home extends Component {
  render () {
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
        </header>
      </div>
    )
  }
}

export default Home;
