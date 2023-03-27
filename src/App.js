import { Route, Routes } from "react-router-dom";
import './styles/app.scss'
import SiteHeader from './Components/layout/SiteHeader'

// import pages
import Dashboard from "./pages/Dashboard";
import Donation from "./pages/Donation";
import ChatBot from "./pages/ChatBot";
import Tools from "./pages/Tools";

function App() {
  return (
    <div className="App">

      <SiteHeader />


      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tools">
          <Route index element={<Tools />} />
          <Route path='donation' element={<Donation />} />
        </Route>
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </div>
  );
}

export default App;
