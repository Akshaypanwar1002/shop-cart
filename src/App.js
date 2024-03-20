
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import NavItems from './Components/NavItems';
import Login from './pages/Login';


function App() {
  return (
    <div>

      <NavItems />
      <div className='min-vh-100'>
        <Outlet />
      </div>
      <Footer />

    </div>
  );
}

export default App;
