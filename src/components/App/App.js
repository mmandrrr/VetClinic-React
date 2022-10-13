import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import DoctorAppointment from './DoctorAppointment/DoctorAppointment';
import ContactsPage from '../App/ContactsPage/ContactsPage';
import CompStory from './CompStory/CompStory';
import Collective from './Collective/Collective';
import SpecialistPage from './Collective/SpecialisPage/SpecialistPage';

import '../../style/reset.css';
import '../../style/style.css';

function App() {
  return (
    <Router>
        <div className="wrapper">
          <Header/>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/appointment/*' element={<DoctorAppointment/>}/>
            <Route path='/contacts' element={<ContactsPage/>}/>
            <Route path='/company-history' element={<CompStory />} />
            <Route path='/collective' element={<Collective />}/>
            <Route path='/collective/*' element={<SpecialistPage />} />
            <Route path='*' element={<Main />}/>
          </Routes>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
