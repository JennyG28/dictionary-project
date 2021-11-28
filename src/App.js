
import './App.css';
import Dictionary from "./Dictionary";
import logo from "./girl-reading.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <br />
              <header className="App-header" >
                Dictionary
      </header>
      <br />
      <main>
        <Dictionary/>
        </main>
        <br />
        
        <footer>
      <div>
        <a
          href="https://github.com/JennyG28?tab=repositories" target="_blank" rel="noreferrer"
          >Open-source code </a> {" "}
        <a
          href="https://www.shecodes.io/students/275-j-e" target="_blank" rel="noreferrer"
          >by Jenny Gomez</a>
      </div>
      </footer>
    </div>
    </div>
  );
}


