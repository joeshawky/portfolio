import './App.css';
import locationImage from './assets/icons/location.png'
import projectOne from './assets/images/projectOne.png'


function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="hero-circle"></div>
        <div className="hero-glow"></div>

        <h1 className="hero-title">Yusuf Essam</h1>
        <p className="hero-subtitle">Software Developer</p>
        <div className="hero-location-div">
        <img className="location-icon" src={locationImage} />
        <p className="hero-location">
          
          Istanbul, Turkey</p>

        </div>
        <p className="hero-description">
          From a hobby to a way of maintaining life. The code has become a part of me
        </p>
        <button className="hero-button">View Projects</button>
      </section>

      <section className="projects" hidden>
        <h2>Projects</h2>
        <div className="project-cards">
          {Array(5).fill().map((_, index) => (
            <div className="project-card" key={index} style={{backgroundImage: `url(${projectOne})`}}>
              {/* <div className="project-screen">X O X<br/>O X O</div> */}
              <h3>PROJECT ONE</h3>
              <p>lorem ipsum uit amet connected samia dostia...</p>
              <p className="round">Round 2</p>
            </div>
          ))}
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-entry">
            <div className="timeline-box"></div>
            <p>Oct 2022 - Oct 2022</p>
          </div>
          <div className="timeline-entry">
            <div className="timeline-box"></div>
            <p>Oct 2022 - Oct 2022</p>
          </div>
        </div>
      </section>

      <div className="mountains"></div>
    </div>
  );
}

export default App;