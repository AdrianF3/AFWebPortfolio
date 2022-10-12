import './App.css';
import HeaderWelcome from './Components/HeaderWelcome';
import PortfolioDescriptions from './Components/PortfolioDescriptions';
import EctorGrowExplainer from './Components/EctorGrowExplainer'
import ContactSection from './Components/ContactSection';
import Skills from './Components/Skills';




function App() {
  return (
    <div className="App">
      <container>
        {/* Header / Welcome Area */}
          {/* anchor links to jump to certain parts of the page - also include button to toggle dark mode */}
          {/* <HeaderWelcome /> */}
          <HeaderWelcome />
          <Skills />
        {/* Skills Brief Description of expereince */}
        
        {/* Developer Experience & Projects */}
          <PortfolioDescriptions />
          <EctorGrowExplainer />
        {/* Updated Resume & Cover & contact info */}
          {/* Simple section, easy to download from */}
          <ContactSection />        



      </container>      
    </div>
  );
}

export default App;
