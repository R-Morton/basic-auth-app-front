import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUpPage from './pages/SignUp';
import SignIn from './pages/SignIn';
import SecurePage from './pages/SecurePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/sign-up' element={<SignUpPage />}/>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/secure' element={<SecurePage />} />
    </Routes>
  );
}

export default App;
