import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LinkQRCode from "./LinkQRCode";
import Contact from "./Contact";
import NotFound from "./NotFound";

function App() {
  return (
    <Router basename="/qr.contact">
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<LinkQRCode />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
