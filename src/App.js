import "./App.css";
import Navbar from "./components/Navbar";
// import Textarea from "./components/Textarea";
import About from "./components/About";

function App() {
  return (
    <>
    <Navbar title = "TextUtils" home = "Home" about = "About"/>
    {/* <Textarea title = "Enter the text to be converted"/> */}
    <About/>
    </>
  );
}
export default App;
