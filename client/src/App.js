import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import './App.less';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/mall" element={<Mall />} />
          <Route path="/item/:id" element={<ProductPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} /> */}
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
