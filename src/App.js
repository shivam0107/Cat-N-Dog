import "./App.css";
import LeftSection from "./components/LeftSection";
import Navbar from "./components/Navbar";
import RightSection from "./components/RightSection";

function App() {
  return (
    <div className="bg-[#FDE3D9] relative flex flex-wrap h-[810px]  ">
      <Navbar></Navbar>
      <RightSection />
      <LeftSection />
    </div>
  );
}

export default App;
