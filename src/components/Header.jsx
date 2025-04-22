import { Link, useNavigate, NavLink } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <ul>
        {/* <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/contact')}>Contact</li> */}
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li> */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
