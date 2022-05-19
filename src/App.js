
import './App.css';
import Nav from './component/Nav'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import News from './component/News';

const App = () => {
  return (
    <>
      <Nav titlename='NewsGeek' />
      <News />
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
