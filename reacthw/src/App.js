import './App.css';

function Text (props){
  const a = props.decoration ? 'underline' : 'none';

  return <p style = {{fontSize:props.size + 'px', color:props.color, textDecoration:a}}> {props.text} </p>
}

function App() {
  return (
    <div className="App">
      <Text text="Regular Text"></Text>
      <Text text="Huge text" size={20}></Text>
      <Text text="Danger notification" color="red"></Text>
      <Text text="Underlined Text" decoration></Text>
    </div>
  );
}

export default App;