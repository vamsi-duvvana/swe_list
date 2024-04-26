import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <Body className=''/>
      <Footer />
    </div>
  );
}

export default App;
