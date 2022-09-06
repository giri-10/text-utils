import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";

function App() {
  return (
    <>
    <Navbar title = "TextUtils" home = "Home" about = "About"/>
    <Textarea title = "Enter the text to be converted"/>
    </>
  );
}
export default App;
