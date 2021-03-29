import './App.css';
import LogInPage from './components/LogInPage'
import CheckList from './components/CheckList/CheckList'


function App() {
  return (
    <div className="App">
      
      <LogInPage />
      <CheckList title="Plan for today"/>

    </div>
  );
}

export default App;