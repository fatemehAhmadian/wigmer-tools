import { Route, Routes } from "react-router-dom";
import './styles/app.scss'
import SiteHeader from './Components/layout/SiteHeader'

// import pages
import Dashboard from "./pages/Dashboard";
import Donation from "./pages/Donation";
import ChatBot from "./pages/ChatBot";
import Tools from "./pages/Tools";
import MainPageSidebar from "./Components/layout/sidebar/MainPageSidebar";
import LandingPage from "./pages/LandingPage";
import X from "./pages/X";
import Y from "./pages/Y";
import Z from "./pages/Z";

function App() {
  return (
    <div className="App">

      {/* <SiteHeader /> */}




      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<X />} />
          <Route path="x" element={<X />} />
          <Route path="y" element={<Y />} />
          <Route path="z" element={<Z />} />
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tools">
          <Route index element={<Tools />} />
          <Route path='donation' element={<Donation />} />
        </Route>
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tools">
          <Route index element={<Tools />} />
          <Route path='donation' element={<Donation />} />
        </Route>
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes> */}
    </div>
  );
}

export default App;
