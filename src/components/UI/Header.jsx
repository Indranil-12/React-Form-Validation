import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Main navigation">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">SignUp</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/testing">Testing</NavLink>
          </li>           
        </ul>
    </nav>
  )
}

export default Header