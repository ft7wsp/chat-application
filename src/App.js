import './App.css';
import axios from 'axios'
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Log from './Log-in'
import Messages from './messages';


class App extends Component {
  state = {
    msg: { text: null, user: null },
    msgs: { text: 'first msg', user: 'acc1' },
    // accouts:{
    //   acc1:1111,
    //   acc2:2222
    // },
    logedIn: false,
    activeAcc: null,
    numberMsgs: 0,
    Username: undefined
  }

  name = (e) => {
    console.log(e.target.value);

    this.setState({ Username: e.target.value })
  }
  save = (e) => {
    const newMsg = {
      ...this.state.msg
    }
    newMsg.text = e.target.value
    newMsg.user = this.state.activeAcc
    newMsg.date = `${new Date().getDate()}--${new Date().getHours()}:${new Date().getMinutes()}`
    this.setState({ msg: newMsg })
  }
  submit = () => {
    axios.post('https://chat-app-73c79-default-rtdb.firebaseio.com/msg.json', this.state.msg).then(res => {
      axios.get('https://chat-app-73c79-default-rtdb.firebaseio.com/msg.json').then(res => {
        const data = res.data
        const newNumberMsgs = Object.keys(data).length
        this.setState({ numberMsgs: newNumberMsgs })
        const msgs = Object.keys(data).slice(-7).map(msg => data[msg])
        this.setState({ msgs: msgs })
      }).catch(err => console.log(err))
    })
      .catch(err => console.error(err))
  }
  componentDidMount = () => {
    // while (true) {

    axios.get('https://chat-app-73c79-default-rtdb.firebaseio.com/msg.json').then(res => {
      const data = res.data
      const newNumberMsgs = Object.keys(data).length
      this.setState({ numberMsgs: newNumberMsgs })
      const msgs = Object.keys(data).slice(-7).map(msg => data[msg])
      this.setState({ msgs: msgs })
      // console.log(data, newNumberMsgs, msgs);

    }).catch(err => console.log(err))

    // window.location.reload()
    // }
  }

  log = (e) => {

    if (e.target.value === '1111' || e.target.value === '2222') {
      // const history = useHistory();
      // history.push("/home");
      const newactiveAcc = this.state.Username
      this.setState({ activeAcc: newactiveAcc, logedIn: true })
    }
  }
  render() {

    // let output;
    // if (this.state.logedIn) {
    //   output = <Messages msgs={this.state.msgs} save={this.save} submit={this.submit} />
    // } else {
    //   output = <Log log={this.log} />
    // }
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Log log={this.log} active Username={this.name} />} />
          {this.state.logedIn ? <Route path='/msg' element={<Messages Username={this.state.Username} numberMsgs={this.state.numberMsgs} msgs={this.state.msgs} save={this.save} submit={this.submit} activeAcc={this.state.activeAcc} />} /> : <Route path='/msg' element={<Log log={this.log} />} />}
        </Routes>
        {/* <div className="App">
          {output}
        </div> */}
      </BrowserRouter >
    );
  }
}


export default App;
