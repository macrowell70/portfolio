import './App.scss';

import { Nav, Home, Projects, About, Contact, Footer } from './components';

function App() {
  return (
    <div id='main'>
      <div className='home-container'>
        <Nav />
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
