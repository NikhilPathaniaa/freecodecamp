function Car(props) {
  return (
    <div className="car">
      <img src={props.imgUrl} />
      <h2>My {props.make}</h2>
      <p>
        My {props.make} is {props.color}
      </p>
      <p>It's a bit older, from {props.year}</p>
    </div>
  );
}

let app = (
  <div class="cars">
    <Car
      make="BMW"
      color="blue"
      year="2011"
      imgUrl="https://www.codingexercises.com/img/2022-01-25/001-bmw-blue.jpg"
    />
    <Car
      make="Mercedes"
      color="gray"
      year="2018"
      imgUrl="https://www.codingexercises.com/img/2022-01-25/002-mercedes-gray.jpg"
    />
    <Car
      make="Toyota"
      color="gray"
      year="new"
      imgUrl="https://www.codingexercises.com/img/2022-01-25/003-toyota-gray.jpg"
    />
    <Car
      make="Alpha Romeo"
      color="red"
      year="2012"
      imgUrl="https://www.codingexercises.com/img/2022-01-25/004-alpha-romeo-red.jpg"
    />
  </div>
);

ReactDOM.render(app, document.querySelector("#app")); 