import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import TodoElement from './componets/todoElement/todoElement'

interface IState {
  hey: [any];
}
interface IProps { }

class App extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      hey: [{ title: "Loading", completed: false }]
    }
    this.paginate = this.paginate.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:8082/all', {
      // params: {
      //   _page: "sd",
      //   _limit: 10
      // }
    }).then((value) => {
      this.setState(() => {
        return { hey: value.data } as IState;
      });
    })
  }
  paginate() {
    axios.get('http://localhost:8082/pag', {
      params: {
        _page: this.state.hey.length,
        _limit: 1
      }
    }).then((value) => {
      this.setState((prev) => {
        return { hey: [...prev.hey, ...value.data] } as IState;
      });
    })
  }
  render() {
    return (
      <div className="App">

        {this.state.hey.map((value) => {
          return <TodoElement title={value.title}
            completed={value.completed} />
        })}
        <button onClick={this.paginate}></button>
      </div>
    );
  }

}

export default App;
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// },