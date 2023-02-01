import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./componets/Navbar";
import { ShoppingCartProvidor } from "./context/ShopingCartContext";
function App() {
  return (
    // <ShoppingCartProvidor>
    <Container className="mb-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
    // </ShoppingCartProvidor>
  );
}
export default App;
