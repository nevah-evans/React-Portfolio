import { Link, useLocation} from 'react-router-dom';
import '../index.css';

function Nav() {
    const currentPage = useLocation().pathname;

  return (
    
    <div id='banner'>
  
        <h1>Nevah Evans</h1>

        <ul className="nav nav-tabs">

          <li className="nav-item" id='about-me'>
              <Link to='/'
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link" 
                } 
              >
                <h3 id='about-me'>About Me</h3>
              </Link>
          </li>

          <li className="nav-item" id='projects'>
              <Link to='/Projects'
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
              >
                <h3 id='projects'>Projects</h3>
              </Link>
          </li>

          <li className="nav-item" id='contact-me'>
              <Link to='/Contact'
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                <h3 id='contact-me'>Contact Me</h3>
              </Link>
          </li>

          <li className="nav-item" id='resume'>
              <Link to='/Resume'
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                <h3 id='resume'>Resume</h3>
              </Link>
          </li>

        </ul>

      </div>
  );
}

export default Nav;
