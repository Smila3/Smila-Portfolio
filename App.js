import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <title> Smila Gala </title>
        <div>
        <br></br>
        <h1 className='Smila'> Smila's     Portfolio</h1>

          <br>
          </br>
        </div>
        <div>
        <img src="git.png" className="Git-logo" alt="logo" />
        <img src="email.png" className="Email-logo" alt="logo" />
        <img src="linkedin_.png" className="Linked-logo" alt="logo" />
        </div>
        <div>
        <a
         className="My-github"
         href="https://github.com/Smila3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
         className="My-email"
         href="mailto: mail.google.com/mail/u/1/#inbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          smilame.3@gmail.com
        </a>
        <a
        className="My-linkedin"
        href="https://www.linkedin.com/in/smila-gala-alfonso-978b1427b"
        target="_self"
        rel="noopener noreferrer"
        >Linkedin</a>
        </div>
      </header>
      <body>


      <h1 className='Header1'>Who am I?</h1>

      <p className='About1'> Hello, there! my name is Smila Gala and I am a student at Rutgers University. I have experience working with <b>HTML, CSS, Javascript</b>, <b>Java</b>, the game engines <b>Godot</b> and <b>Unity</b>. 
      I also have some experience with graphic and UX Design and tools like Figma, Canva and Photoshop. Feel free to look at my resume and projects listed on this website</p>   
      <div>
      
      <h1 className='Header1'>Some of my projects</h1>
      <table className='Table'>
        <tr>
          <th className='Header-Left'><b>Projects</b></th>
          <th className="Header-Right">What I used</th>
        </tr>
       <tr>
          <td className='Project'>Smila's portfolio website</td>
          <td className='Used'>For this website I used HTML, CSS and Javascript and the library React. In here you will find links to my projects listed below, as well as their description and purpose</td>
       </tr>
       <tr>

       </tr>
      </table> 
      <br></br>
      <br></br>
      
      </div>
      </body>
      <footer className='Foot'>
        <p><i><b>This website was from scratch made using the React library</b></i></p>
      </footer>
    </div>
  );
}

export default App;
