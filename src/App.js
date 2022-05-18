
import './App.css';
import Nav from './component/Nav'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './component/pages/home';
import About from './component/pages/about';

const App = () => {
  return (
    <>
      <Nav titlename='NewsGeek' />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router>
    </>

  )
}

export default App;
