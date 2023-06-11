import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Login from './components/Login';
import SignUp from './components/signUp';
import Fpassword from './components/Fpassword';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/fPassword' element={<Fpassword/>}/>
      <Route path='/homePage' element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
