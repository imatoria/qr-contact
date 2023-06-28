import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LinkQRCode from "./LinkQRCode";
import Contact from "./Contact.jsx";
import NotFound from "./NotFound";

function App() {
  return (
    <Router basename="qr-contact">
      <div className="App">
        <ul>
          <li>
            <Link to="/">QR Code</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<LinkQRCode />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
