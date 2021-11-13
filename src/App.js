import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PropsChange from './components/PropsChange';
import React from 'react';

class App extends React.Component {

  state = {
    count: 0
  }

  handleChangeProps = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }
    ))
    //console.log(this.state.count)

  }

  render() {
    return (
      <div className="App">


        <p>Http: working with http</p>
        <p>Test Api Reference: https://jsonplaceholder.typicode.com/</p>
        {/* <PostList></PostList> */}
        {/* <PostForm></PostForm> */}

        <PropsChange count={this.state.count} />

        <button onClick={() => this.handleChangeProps()}>Click Me</button>
      </div>
    );
  }
}

export default App;
