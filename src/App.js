import './App.css';
import HeaderWelcome from './Components/HeaderWelcome';

function App() {
  return (
    <div className="App">
      <container>
        {/* Header / Welcome Area */}
          {/* anchor links to jump to certain parts of the page - also include button to toggle dark mode */}
          <HeaderWelcome />

        {/* About Me */}
        <section>
          <div>
            <p></p>
          </div>
        </section>      
        {/* Developer Experience & Projects */}
          {/* Full Projects followed by mini projects/components to use on page only */}
        <section>
          <div>
            <p></p>
          </div>
        </section>
        {/* Updated Resume & Cover & contact info */}
          {/* Simple section, easy to download from */}
        <section>
          <div>
            <p></p>
          </div>
        </section>



      </container>      
    </div>
  );
}

export default App;
