import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./components/TopBar/Topbar";
import Homepage from "./components/HomePage/Homepage";
import Discordpage from "./components/Page2/discordpage"
import Parallax from "./components/page3/parallax"
import Team from "./components/page4/team"
import Showcase from "./components/showcase/showcase";
import Roadmap from "./components/roadmap/roadmap";
import Footer from "./components/footer/footer"
import "./App.css";
import Mint from "./components/Mint/mint";

function App() {
  return (
    <BrowserRouter>
    <Topbar />
    <Homepage/>
    <Showcase/>
    {/* <Mint /> */}
    <Discordpage/>
    {/* <Parallax/> */}
    <Roadmap/>
    <Team/>
    <Footer/>
    {/* <Routes >
      <Route exact path='/showcase' element={<Showcase /> }/>
      
      </Routes > */}
      
    </BrowserRouter>

  );
}

export default App;