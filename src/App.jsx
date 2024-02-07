import Rightslot from "./components/Rightslot/Rightslot";
import Navsidebar from "./components/Sidebar/Navsidebar";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Navsidebar />
      <div>
        <Rightslot />
      </div>
    </div>
  );
}

export default App;
