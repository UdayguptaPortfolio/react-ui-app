import './App.css';
import { Header } from './componenets/header';
import Offers from './componenets/offers';
import UpperHeader from './componenets/upperheader'
function App() {
  return (
    <div className="App">
      <UpperHeader/>
     <Header/>
     <Offers/>
    </div>
  );
}

export default App;
