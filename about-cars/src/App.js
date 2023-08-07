import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="person">
        <h1>My {props.make}</h1>
        <p>My {props.make} is {props.color}</p>
        <p>It's a bit older, from {props.year}</p>
      </div>
    </div>
  );
}

export default App;