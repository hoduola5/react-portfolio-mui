// import logo from './logo.svg';
import "./App.css";

//import components
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ProjectGallery from "./components/ProjectGallery";

function App() {
  return (
    <div className="App">
      {/* {calling the components} */}
      <Header />
      {/* <Home /> */}
      {/* <Contact /> */}
      <Projects />
      <ProjectGallery />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
