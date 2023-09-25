import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Store } from "./pages";
import { useHeaderActions } from "./context/HeaderActionsContext";
import SideCart from "./layout/sideCart/SideCart";
import Header from "./layout/header/Header";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./layout/footer/Footer";

function App() {
  const { isDark } = useHeaderActions();

  return (
    <section role="application" className={`App ${isDark ? "dark" : ""}`}>
      <Header />
      <SideCart />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
