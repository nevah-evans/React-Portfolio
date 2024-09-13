// import { useState } from 'react';
// import Navigation from './Navigation.jsx';

// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Project from './pages/Project.jsx';
// import Contact from './pages/Contact.jsx';
// import Resume from './pages/Resume.jsx';


// export default function Body() {
//     const [currentPage, setCurrentPage] = useState('Home');

//     const renderPage= () => {
//         if (currentPage === 'Home') {
//             return <Home />;
//         }
//         if (currentPage === 'About') {
//             return <About />;
//         }
//         if (currentPage === 'Portfolio') {
//             return <Project />;
//         }
//         if (currentPage === 'Contact') {
//             return <Contact />;
//         }
//         return <Resume />;
//     };

//     const handlePageChange = (page) => setCurrentPage(page);

//     return (
//     <div>
//         <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
//         <main className='mx- 3'>{renderPage()}</main>
//     </div>
//     );
// }

