import Home from './components/Home';

import { Link } from 'react-router-dom';    

function Navbar() {
  return (
    <nav className="m1-2 bg-gray-800 text-white shadow-lg">
      <ul className='flex justify-around space-x-6   p-4'>
      <li> <Link to='/home' className="hover:text-yellow-400 transition" >Home</Link> </li>
           <li> <Link to='/about' className="hover:text-yellow-400 transition">About</Link> </li>
              <li> <Link to='/contact' className="hover:text-yellow-400 transition">Contact</Link> </li>
      </ul>
    </nav>
  );
}


export default Navbar;