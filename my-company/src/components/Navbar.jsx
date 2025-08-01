import { Link } from 'react-router-dom';

function Navbar() {
  return (
     <nav
      style={{
        backgroundColor: '#333',
        padding: '10px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
    <nav style={{ backgroundColor: '#333', padding: '10px', marginBottom: '20px' }}>
      <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', marginRight: '15px' }}>About</Link>
      <Link to="/services" style={{ color: 'white', marginRight: '15px' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;

