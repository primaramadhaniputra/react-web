import CardComponent from "./layout/CardComponent/CardComponent";
import Content from "./layout/Content/Content";
import EndFooter from "./layout/EndFooter/EndFooter";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import MiniContent from "./layout/MiniContent/MiniContent";
import Navbar from "./layout/Navbar/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <CardComponent />
      <Content />
      <MiniContent />
      <Footer />
      <EndFooter />
    </div>
  );
}

export default App;
