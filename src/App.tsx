import reactLogo from "./assets/react.svg";
import "./App.css";

import WebApp from "@twa-dev/sdk";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>QUE PASO JEFE</h1>
      <div className="card"></div>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`huehue`)}>
          Pequeña no digas eso
        </button>
      </div>
    </>
  );
}

export default App;
