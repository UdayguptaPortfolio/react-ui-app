import './App.css';
import AmazingFeatures from './componenets/amazingfeatures';
import CompanyFacts from './componenets/companyfacts';
import { Header } from './componenets/header';
import Offers from './componenets/offers';
import PowerFullSkills from './componenets/powerfullskills';
import PricePlans from './componenets/priceplans';
import SampleWorks from './componenets/sampleworks';
import TeamMembers from './componenets/teammembers';
import UpperHeader from './componenets/upperheader'
function App() {
  return (
    <div className="App">
      <UpperHeader/>
     <Header/>
     <Offers/>
     <AmazingFeatures/>
     <PowerFullSkills/>
     <SampleWorks/>
     <CompanyFacts/>
     <TeamMembers/>
     <PricePlans/>
    </div>
  );
}

export default App;
