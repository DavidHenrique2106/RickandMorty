import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'

function App() {
  return (
    <div className="App">
      <SayMyName name="Anna" />
      <HelloWorld />
    </div>
  );
}

export default App;
