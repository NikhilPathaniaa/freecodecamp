import {Cards} from './Cards';
import Data from './data';
import './App.css';
import Value from './components/Value';
import Bio from './components/Bio';
import Buttons from './components/Buttons';
import ButtonValue from './components/ButtonValue';

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
        <div>
        {Value.map(Value =>(
            <Bio
              key={Value.id}
              imagesUrl={Value.imagesUrl}
              name={Value.name}
              profile={Value.profile}
              skills={Value.skills}
            />
          ))}
        </div>
        <div>
          
        {ButtonValue.map(ButtonValue =>(
            <Buttons
              key={ButtonValue.id}
              skill={ButtonValue.skill}
              
            />
          ))}
        </div>
    </>
  );
}

export default App;
