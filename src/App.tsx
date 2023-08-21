import Home from "./pages/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <>
      <HashRouter>
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
