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
      imagesUrl ="https://upload.wikimedia.org/wikipedia/en/2/28/Ajay_Devgn%27s_Raid_poster.jpg"
      name ="Raid"
      description=" Income-tax raid conducted by the officers of Income Tax Department on Sardar Inder Singh in the 1980s which distinguished itself from others for being the longest raid in Indian history, lasting 3 days and 2 nights"
      />
    </div>
  );
}

export default App;
