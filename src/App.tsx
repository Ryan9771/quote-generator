import Home from "./pages/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Quotes from "./pages/Feelings";
import Navbar from "./components/navbar/Navbar";
import Journal from "./pages/Journal";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="feelings">
              <Route index element={<Home />} />
              <Route path=":emotion" element={<Quotes />} />
            </Route>
            <Route path="journal" element={<Journal />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
