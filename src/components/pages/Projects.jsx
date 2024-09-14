import Header from "../Header";
import JATE from "../../images/JATE.png";
import social from "../../images/social.jpg";
import hike from "../../images/hike.jpg";
import shopping from "../../images/shopping.jpeg";

export default function Project() {
  return (
    <div id="projects-page">
      <Header />
      <p>
        {" "}
        Click on the image to open up the application or you can click on the
        title card for each project to visit the GitHub repo!
      </p>


      <div id="row">
      <a href="https://progressive-web-app-y837.onrender.com/">
        <img src={JATE}  />
      </a>
      <a  id="card" href="https://github.com/nevah-evans/Progressive-Web-App" >
      J.A.T.E
      </a>

      <a href="https://drive.google.com/file/d/1R4sxNGnIj_Ty7V9TavfAYIJk3CuiXnam/view">
        <img src={social} />
      </a>
      <a id="card" href="https://github.com/nevah-evans/Social-Network-API">
       Social Network API
      </a>
      </div>

      <div id="row">
      <a href="https://group5project2-ebpb.onrender.com/">
        <img src={hike} />
      </a>
      <a id="card" href="https://github.com/nevah-evans/Find-A-Hike">
      Find A Hike
      </a>

      <a href="https://drive.google.com/file/d/1QjkIfI6ttl8n0_Y1VkEUCpiert_LxiMk/view">
        <img src={shopping} />
      </a>
      <a id="card" href="https://github.com/nevah-evans/E-Commerce-BE">
       E-Commerce
      </a>
      </div>
    </div>
  );
}
