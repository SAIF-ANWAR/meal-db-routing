import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import DhakaOffice from './components/Contact/DhakaOffice';
import ChittagongOffice from './components/Contact/ChittagongOffice';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Item from './components/Item/Item';
import NotFound from './components/Not-found/NotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/food-details/:id' element={<Item></Item>}></Route>
        <Route path='/foods' element={<Foods></Foods>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path="dhaka-address" element={<DhakaOffice></DhakaOffice>}></Route>
          <Route path="chittagong-address" element={<ChittagongOffice></ChittagongOffice>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}


export default App;
