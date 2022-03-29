import Greeting from './components/greeting';
import About from './components/about';
import Projects from './components/projects';
import Nav from './components/nav';
import Contact from './components/contact';
import Footer from './components/footer';

import './stylesheets/index.scss'

const App = () => {
  return (
    <div>
      <Nav />
        <div className="content_wrapper">
          <Greeting />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
    </div>
  );
}

export default App;
