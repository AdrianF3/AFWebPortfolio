import './App.css';

function App() {
  return (
    <div className="App">
      <container>
        {/* Header / Welcome Area */}
          {/* anchor links to jump to certain parts of the page - also include button to toggle dark mode */}
        <section className='h-40 bg-emerald-800 text-center text-white'>
          <div className='flex flex-row justify-evenly'>
            {/* row section one, name and summary */}
            <div className='flex flex-col'>
              <p className='mt-6 text-3xl'>
                Adrian Fregoso
              </p>
              <p className='text-xl mt-4'>
                Software Developer
              </p>
            </div>
            {/* row section two, light/dark mode toggle */}
            <div className='flex justify-items-end'>
              <p>light</p>
              <p>dark</p>

            </div>
          </div>
        </section>



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
