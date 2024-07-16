import logo from './logo.svg';
import './App.css';
import Welcome from './components/Hello';
import Counter from './components/Counter';
import Todos from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todos />
        <hr/>
        <Welcome name="Payal" />
        <Counter />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
