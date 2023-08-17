import {Cards} from './Cards';
import Data from './data';
import './App.css';
function App() {
  return (
    <>  
      <div className='App'>
          {Data.map(Data =>(
            <Cards
              key={Data.id}
              name={Data.name}
              imagesUrl={Data.imagesUrl}
              description={Data.description}
            />
          ))}
        </div>
    </>
  );
}

export default App;
