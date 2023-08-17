import {Cards} from './Cards';
import Data from './data';
import './App.css';
function App() {
  return (
    <>  
          {Data.map(Data =>(
            <Cards
              key={Data.id}
              name={Data.name}
              imagesUrl={Data.imagesUrl}
              description={Data.description}
            />
          ))}
    </>
  );
}

export default App;
