import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Companies from './components/Companies';
import StudentPortal from './components/StudentPortal';
import Exam from './components/Exam';
import Ship from './components/Ship';
import Admin from './components/Admin';
import Form from './components/Form';
import Jobform from './components/Jobform';
import AdminLogin from './components/Adminlog';
import Exams from './components/Exams';
import Quiz from './components/Quiz';
import Registers from './components/Login';
import Login from './components/Login';
import Logout from './components/Logout';
import Contact from './components/Contact';
import Certificate from './components/Certificate';
import Ship1 from './components/Ship1';
import Jobstatus from './components/Jobstatus';
import Recruit from './components/Recruit';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/student" element={<StudentPortal />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/ship" element={<Ship />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Jobform" element={<Jobform />} />
          <Route path="/Adminlog" element={<AdminLogin />} />
          <Route path="/Exams" element={<Exams />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Registers" element={<Registers />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Certificate" element={<Certificate />} />
          <Route path="/Ship1" element={<Ship1 />} />
          <Route path="/Jobstatus" element={<Jobstatus />} />
          <Route path="/Recruit" element={<Recruit />} />
          <Route path="/Login" element={<Login />} />
          





        </Routes>
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
