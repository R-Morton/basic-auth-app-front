import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUpPage from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/sign-up' element={<SignUpPage />}/>
    </Routes>
  );
}

export default App;
