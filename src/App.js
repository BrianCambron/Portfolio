import './App.css';
import profile from './images/profilepic.jpeg';
import newsapp from './images/portfolio-newsapp.png';
import picture from './images/portfolio-pictureperfect.png';
import saveit from './images/portfolio-saveit.png';

function App() {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-left">
        <span style={{fontWeight:'bold'}}>Brian</span> Cambron
      </div>
      <div className="navbar-right">
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
    <section id="about">
      <div className="row col-12 d-flex bio-container">
        <div style={{height: '500px'}}className="col-6 bio-left">
          <div className="pp-container">
            <img className="profile-pic"src={profile} alt="Brian Cambron"/>
            <h2>Brian Cambron</h2>
            <h3>Full Stack Developer</h3>
          </div>
        </div>
        <div style={{height: '500px'}}className="col-6 bio-right">
          <p>So a little about me, I was born in Mexico but I was raised in Greenville, SC. I love anime, music, playing video games, finding new restaurants, but most importantly, I LOVE TO CODE. Under the guidance of seasoned instructors and staff at the Carolina Code School, I was given not only the skills necessary to be a successful Full Stack Developer, but also the tools to learn. Armed with these new skills, I have immersed myself fully into the software development world and have continued to learn and improve myself not only as a programmer, but also as a student in the never-ending journey of software development.</p>
        </div>
      </div>
    </section>
    <section id="portfolio" className="portfolio">
      <div className="newsapp">
        <div className="display">
          <a target="_blank" rel="noreferrer" href="https://django-fullstack-newsapp.herokuapp.com/">
            <img src={newsapp} alt="newsapp"/>
          </a>
        </div>
      </div>
      <div className="description">
        <h2>News app</h2>
        <p>A full stack app for uploading news articles.</p>
        <h4 style={{marginBottom: '20px'}}><a target="_blank" rel="noreferrer" href="https://github.com/BrianCambron/Django_Fullstack_Newsapp">View Code</a></h4>
      </div>
      <div className="picture-perfect">
        <div className='display'>
          <a target="_blank" rel="noreferrer" href="https://briancambron.github.io/pixel-perfect/">
            <img src={picture} alt="brian's pixel perfect"/>
          </a>
        </div>
      </div>
      <div className='description'>
        <h2>Pixel Perfect</h2>
        <p>A mockup recreation using HTML and CSS.</p>
        <h4 style={{marginBottom: '20px'}}><a target="_blank" rel="noreferrer" href="https://github.com/BrianCambron/pixel-perfect">View Code</a></h4>
      </div>
      <div className="saveit">
        <div className='display'>
        <a target="_blank" rel="noreferrer" href="https://ccs-final-project-saveit.herokuapp.com/">
          <img src={saveit} alt="saveit budgeting app"/>
        </a>
        </div>
      </div>
      <div className="description">
        <h2>Saveit</h2>
        <p>Saveit is a budgeting app that utilizes Dave Ramsey's envelope system.</p>
        <h4 style={{marginBottom: '20px'}}><a target="_blank" rel="noreferrer" href="https://github.com/BrianCambron/CCS-Final-Project">View Code</a></h4>
      </div>
    </section>
    <section id='contact'>
      <div className="contact-container">
        <h1 style={{fontSize:'30px', fontWeight: '300'}}>Contact Me</h1>
        <h4 style={{fontWeight: '300', fontStyle:'italic', marginBottom:'30px'}}>Send me an email or connect with me around the web</h4>
        <div className="card-holder">
          <div className='card'>
            <a href="mailto:brian.cambron71@gmail.com" alt='email Brian'><i style={{fontSize:'50px', color:'white'}}className="far fa-envelope"></i>
            <h5 className="mt-2">EMAIL</h5>
            </a>
            <p>brian.cambron71@gmail.com</p>
          </div>
          <div className='card'>
            <a target="_blank" rel="noreferrer" href="https://github.com/BrianCambron" alt="Brian's github"><i style={{fontSize:'50px', color:'white'}}className="fab fa-github"></i>
            <h5 className="mt-2">GITHUB</h5>
            </a>
            <p>Published Code</p>
          </div>
          <div className='card'>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brian-cambron-ibanez-a4707a200/" alt="Brian's linkedin"><i style={{fontSize:'50px', color:'white'}}className="fab fa-linkedin-in"></i>
            <h5 className="mt-2">LINKEDIN</h5>
            </a>
            <p>My Work Experience</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
