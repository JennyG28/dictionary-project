
import './App.css';
import Dictionary from "./Dictionary";
import logo from "./words.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        Dictionary
      </header>
      <main>
        <Dictionary/>
        </main>
        <br />
        <footer>
      <div>
        <a
          href="https://github.com/JennyG28?tab=repositories"
         
         
          >Open-source code </a> {" "}
        <a
          href="https://www.shecodes.io/students/275-j-e"
          
         
          >by Jenny Gomez</a>
      </div>
      </footer>

    </div>
    </div>
  );
}


