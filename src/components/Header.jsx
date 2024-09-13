// import { useState } from "react";

// export default function Header() {
//   const [currentPage, setCurrentPage] = useState();

//   const renderHeader = () => {
//     if (currentPage === "About") {
//       return <h1>About Me</h1>;
//     }
//     if (currentPage === "Portfolio") {
//       return <h1>My Portfolio</h1>;
//     }
//     if (currentPage === "Contact") {
//       return <h1>Contact Me</h1>;
//     }
//     return <h1>MY Resume</h1>;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <Header currentPage={currentPage} handlePageChange={handlePageChange} />
//       <main>{renderHeader()}</main>
//     </div>
//   );
// }
