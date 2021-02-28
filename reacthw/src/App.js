import './App.css';
import Ex1 from "./components/Ex1";
import Ex2 from "./components/Ex2";
import Square from './components/Ex3'
import Ex4 from './components/Ex4'

function App() {
  return (
    <div className="App">

      <Ex1 />
      <Ex2 text = "Lorem ipsum dolor"/>

      <Square label='Big square' cssClass='big-square'/>
      <Square label='Medium square' cssClass='medium-square'/>
      <Square label='Small square' cssClass='small-square'/>

      <Ex4 />

    </div>
  );
}

export default App;
