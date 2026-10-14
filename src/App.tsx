import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return <div class="flex h-screen flex-col overflow-hidden">
  <Navbar/>
  <Hero/>
  </div>;
}

export default App;
