import { useLocation} from 'react-router-dom';
import '../index.css';

const Header = () => {
    const currentPage = useLocation().pathname;
    
    if (currentPage === '/'){
        return <h2>Home Page</h2>
    }
    else if (currentPage === '/About'){
        return <h2>About Me</h2>
    }
    else if (currentPage === '/Projects'){
        return <h2>My Projects</h2>
    }
    else if (currentPage === '/Contact'){
        return <h2>Contact Me</h2>
    }
    return <h2>My Resume</h2> 
};



export default Header;

