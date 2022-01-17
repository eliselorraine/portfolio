import Greeting from './components/greeting';
import About from './components/about';
import MyWork from './components/myWork';
import Nav from './components/nav';
import Contact from './components/contact';
import { Routes, Route } from "react-router-dom";

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
          {/* <Routes>
            <Route path="/" element={<Greeting />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<MyWork />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
        </div>
    </div>
  );
}

export default App;
