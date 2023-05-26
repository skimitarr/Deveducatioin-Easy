import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <nav className="nav">
          <Link to='/' className="nav-link">Home</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Nav;
