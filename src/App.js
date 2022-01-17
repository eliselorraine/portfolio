import Greeting from './components/greeting';
import About from './components/about';
import MyWork from './components/myWork';
import Nav from './components/nav';
import Contact from './components/contact';

import './stylesheets/index.scss'

const App = () => {
  return (
    <div>
      <Nav />
        <div className="content_wrapper">
          <Greeting />
          <About />
          <MyWork />
          <Contact />
        </div>
    </div>
  );
}

export default App;
