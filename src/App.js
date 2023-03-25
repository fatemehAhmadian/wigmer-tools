import { Route, Routes } from "react-router-dom";
import './styles/app.scss'
import SiteHeader from './Components/layout/SiteHeader'

// import pages
import Tools from "./pages/Tools";
import ChatBot from "./pages/ChatBot";
import Alert from "./Components/basic-components/Alert";

function App() {
  return (
    <div className="App">

      <SiteHeader />
      {/* <Alert message={'saved'} /> */}


      <Routes>
        <Route path="/" element={<Tools />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </div>
  );
}

export default App;
