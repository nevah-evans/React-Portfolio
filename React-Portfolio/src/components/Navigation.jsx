import '../index.css';

function Navigation(currentPage, handlePageChange) {
    return (
        <>      
        <div className="Banner">
        <h1>Nevah Evans</h1>
        <h3 id='about-me'>
            <a href='#home' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            About Me
            </a>
            </h3>
        <h3 id='portfolio'>
            <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active': 'nav-link'}>
            Portfolio
            </a>       
            </h3>
        <h3 id= 'contact-me'>
        <a href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active': 'nav-link'}>
            Contact Me
            </a>
            </h3>
        <h3 id='resume'>
        <a href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active': 'nav-link'}>
            Resume
            </a>
            </h3>
        </div> 
        </>
    );
}

export default Navigation;