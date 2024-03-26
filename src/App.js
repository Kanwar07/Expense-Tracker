import Contextdata from "./components/context/Context";
import appstyle from "./App.module.css";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className={appstyle.main}>
      <Contextdata>
        <NavBar />
      </Contextdata>
    </div>
  );
}

export default App;
