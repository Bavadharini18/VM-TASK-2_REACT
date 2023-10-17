import Security from "./Security";
import Payment from "./Payment";
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Security" element={<Security />}/>
       </Routes>

    </div>
  );
}

export default App;
