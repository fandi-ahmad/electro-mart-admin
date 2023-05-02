import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/tailwind.css'
import './assets/css/tailwind.output.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import './assets/css/mycss.css'
import { Dashboard } from "./pages/Dashboard";
import Item from "./pages/Item";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/item" element={<Item/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
