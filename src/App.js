import AddressMap from "./componenets/addressmap";
import AmazingFeatures from "./componenets/amazingfeatures";
import CompanyFacts from "./componenets/companyfacts";
import Footer from "./componenets/footer";
import { Header } from "./componenets/header";
import Offers from "./componenets/offers";
import PowerFullSkills from "./componenets/powerfullskills";
import PricePlans from "./componenets/priceplans";
import SampleWorks from "./componenets/sampleworks";
import SocialMedia from "./componenets/socialmedia";
import TeamMembers from "./componenets/teammembers";
import UpperHeader from "./componenets/upperheader";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UpperHeader />
      <Header />
      <Offers />
      <AmazingFeatures />
      <PowerFullSkills />
      <SampleWorks />
      <CompanyFacts />
      {/* <TeamMembers/> */}
      <PricePlans />
      <SocialMedia />
      <AddressMap />
      <Footer />
    </div>
  );
}

export default App;
