import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">


      <p>Http: working with http</p>
      <p>Test Api Reference: https://jsonplaceholder.typicode.com/</p>
      {/* <PostList></PostList> */}
      <PostForm></PostForm>


    </div>
  );
}

export default App;
