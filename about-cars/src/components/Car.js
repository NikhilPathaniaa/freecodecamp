function Car(props) {
  return (
    <div className="car">
      <h1>My {props.make}</h1>
      <p>
        My {props.make} is {props.color}
      </p>
      <p>It's a bit older, from {props.year}</p>
    </div>
  );
}

let app = (
  <div>
    <Car make="Honda" color="red" year="2011" />
  </div>
);

ReactDOM.render(app, document.querySelector("#app"));