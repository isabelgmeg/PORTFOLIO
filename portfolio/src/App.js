
import NavBar from "./components/NavBar/NavBar";
import Splash from "./components/Splash/Splash";
import Sections from "./components/Sections/Sections"

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Splash />
      <Sections/>

    </div>
  );
}

export default App;
