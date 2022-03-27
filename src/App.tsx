import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from './feature/Login/Login';
import { Contacts } from './feature/Contacts/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

