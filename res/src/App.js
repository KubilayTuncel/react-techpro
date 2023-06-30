import Summary from "./components/summary/summary";
import Main from "./components/main/main";
import {FcMenu} from "react-icons/fc";

function App() {
  return (
    <div className="App">
        <div className="button-header">
            <button className="main-button" onClick=""
                    tooltip="about me">
                <FcMenu/>
            </button>
            <button className="resume-download">Resume Download</button>
        </div>
        <Summary/>
        <Main/>
    </div>
  );
}

export default App;
