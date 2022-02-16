import { useState ,Suspense , lazy} from "react";
import "./App.css";
// import Component1 from "./components/Component1";
const Component1 = lazy(() => import("./components/Component1"));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Component1</button>
      {show ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Component1 />
        </Suspense>
      ) : null}
    </div>
  );
}

export default App;
