import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import DoctorAppointment from './DoctorAppointment/DoctorAppointment';

import '../../style/reset.css';
import '../../style/style.css';

function App() {
  return (
    <Router>
        <div className="wrapper">
          <Header/>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='appointment' element={<DoctorAppointment/>}/>
            <Route path='*' element={<Main />}/>
          </Routes>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
