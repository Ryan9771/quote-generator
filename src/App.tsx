import Home from "./pages/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Quotes from "./pages/Quotes";
import Navbar from "./components/navbar/Navbar";

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
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
