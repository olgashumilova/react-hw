import './App.css';
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'

function App() {
  return (
    <div className="App">
      
      <Ex1 />

      <Ex2 />

      <Ex3 label='Кнопка 1' clickFunction = {() => console.log('Была нажата кнопка 1')}/>
      <Ex3 label='Кнопка 2' clickFunction = {() => alert('Была нажата кнопка 2')}/>
      <Ex3 label='Кнопка с параметром' clickFunction = {(param) => console.log(`${param}'Кнопка с параметром'`)}/>

    </div>
  );
}

export default App;
