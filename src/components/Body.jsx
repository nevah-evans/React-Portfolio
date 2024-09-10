import { useState } from 'react';
import Navigation from './Navigation.jsx';
// import Header from './Header.jsx';
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';


export default function Body() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage= () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Project />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* <Header /> */}
        <main className='mx- 3'>{renderPage()}</main>
    </div>
    );
}

