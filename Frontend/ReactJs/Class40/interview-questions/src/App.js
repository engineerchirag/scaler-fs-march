import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import StopWatch from './components/StopWatch';
import Carousel from './components/Carousel';
import MyModal from './components/Modal';

function App() {
  return (
    <div className="App">
      <MyModal />
      <hr/>
      <Carousel />
      <hr/>
      <StopWatch />
      <hr/>
      <Accordion />
    </div>
  );
}

export default App;
