import './App.css';
import AmazingFeatures from './componenets/amazingfeatures';
import { Header } from './componenets/header';
import Offers from './componenets/offers';
import UpperHeader from './componenets/upperheader'
function App() {
  return (
    <div className="App">
      <UpperHeader/>
     <Header/>
     <Offers/>
     <AmazingFeatures/>
    </div>
  );
}

export default App;
