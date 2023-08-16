import './App.css';
import Cards from './Cards';

function App() {
  return (
    <div className='cards'>
      <Cards 
      imagesUrl ="https://flxt.tmsimg.com/assets/p9359629_p_v10_aa.jpg"
      name ="Heroine"
      description="A female superstar struggles through the trials and tribulations of being a Bollywood actress."
      />
      <Cards 
      imagesUrl ="https://flxt.tmsimg.com/assets/p9359629_p_v10_aa.jpg"
      name ="Heroine"
      description="A female superstar struggles through the trials and tribulations of being a Bollywood actress."
      />
    </div>
  );
}

export default App;
