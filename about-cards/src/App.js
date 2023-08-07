import './App.css';
import { Products } from './components/products';
import contents from './content';

function App() {
  return (
    <>
    <h1 className='header'>AMAZON</h1>
    <div className='App'>
      {contents.map(contents =>(
        <Products
            Key={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
            totalSales={contents.totalSales}
            timeLeft={contents.timeLeft}
            rating={contents.rating}
        />
      ))}
    </div>
    </>
  );
}

export default App;