import './App.css';

import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'
import Ex4 from './components/Ex4-26.02'
import Ex5 from './components/Ex5-26.02'
import Ex6 from './components/Ex6-26.02'

function App() {
  return (
    <div className="App">

      <Ex1 text="Regular Text"></Ex1>
      <Ex1 text="Huge text" size={20}></Ex1>
      <Ex1 text="Danger notification" color="red"></Ex1>
      <Ex1 text="Underlined Text" decoration></Ex1>

      <Ex2 />

      <Ex3 />

      <Ex4 />

      <Ex5 animated = {false}/>
      <Ex5 animated = {true}/>
      
      <Ex6 />
    </div>
  );
}

export default App;