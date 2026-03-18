import { Link, NavLink } from "react-router-dom";

function Navigation() {
    return (
        <>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Hangszerek</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/ujhangszer" target="">Új hangszer</Link>
      </li>
    </ul>
  </div>
</nav>
        </>
    )
}

export default Navigation;