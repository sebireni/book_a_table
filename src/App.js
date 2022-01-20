import './App.css';
import Welcome from './components/Welcome/Welcome';
import Intro from './components/Introduction/Intro';
import Menu from './components/Menu/Menu';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Welcome /> 
      <Intro />
      <Menu />
      <Modal />
    </div>
  );
}

export default App;
