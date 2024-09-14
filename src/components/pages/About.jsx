import Header from '../Header';
import Avatar from '../../images/froggy.png'
export default function About() {
    return (
    
        <div id="about-me-page">
            <Header />
            <div id='bio'>
            <img src={Avatar} />
            <p>
              Hello there, My name is Nevah! I am a new full stack web developer. 
              I transitioned from the medical field into tech and excited to see where the future of technology will lead us!
              I was fist exposed to coding languages when I was in high school. One of our coaches had a passion for technology and computer building.
              Fortunately for me he spent a few years teaching for our computer classes and has motivated to share his knowlege with us! 
              He walked us through how to use basic HTML in the notepad app and build a small and very simple webpage. 
              Since then I have found myself coming back to wantin gto learn how to code at various 
              points in my life until I finally decided to take the chance at a change and give it my full attention and dedication!
              Throughout the bootcamp that I attended I have learned a great deal of information in a relavitvely short amount of time.
              My goal is to continue in building on the knowledge and skills I have gained to become a better and more effient web developer!
            </p>
            </div>
        </div>
    );
}