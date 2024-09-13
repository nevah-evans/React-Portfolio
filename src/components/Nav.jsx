import { Link, useLocation} from 'react-router-dom';

function Nav() {
    const currentPage = useLocation().pathname;

  return (
    
    <div>
      <Link to='/'
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
              >
        Nevah Evans
     </Link>

        <ul className="nav nav-tabs">

          <li className="nav-item">
              <Link to='/About'
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link" 
                } 
              >
                About Me
              </Link>
          </li>

          <li className="nav-item">
              <Link to='/Projects'
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
              >
                Projects
              </Link>
          </li>

          <li className="nav-item">
              <Link to='/Contact'
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact Me
              </Link>
          </li>

          <li className="nav-item">
              <Link to='/Resume'
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </Link>
          </li>

        </ul>

      </div>
  );
}

export default Nav;
