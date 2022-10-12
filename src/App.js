import './App.css';
import HeaderWelcome from './components/HeaderWelcome';
import PortfolioDescriptions from './components/PortfolioDescriptions';
import EctorGrowExplainer from './components/EctorGrowExplainer'
import ContactSection from './components/ContactSection';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <container>
        {/* Header / Welcome Area */}
          {/* anchor links to jump to certain parts of the page - also include button to toggle dark mode */}
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
