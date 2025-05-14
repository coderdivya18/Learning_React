//Header Component
const Header = () => {
  return (
    <header className="header">
      <img
        src="https://png.pngtree.com/png-vector/20230511/ourmid/pngtree-fast-food-burger-icon-vector-illustration-logo-template-png-image_7094486.png"
        className="logo"
        alt="logo"
        width="100px"
        height="100px"
      />

      <nav className="navbar">
        <ul className="nav-items">
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Contact</li>
          <li className="nav-link">Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
