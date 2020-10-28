import "./App.css";

import Header from "./components/Header/Header.js";
import Demo from "./components/Demo/Demo.js";
import WebApp from "./components/WebApp/WebApp.js";
import FuturePlans from "./components/FuturePlans/FuturePlans.js";
import Footer from "./components/Footer/Footer.js";
import Contact from "./components/Contact/Contact.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Demo />
      <WebApp />
      <FuturePlans />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
