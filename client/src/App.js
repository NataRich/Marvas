import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Footer from './common/footer/Footer';
import './App.less';

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/item/:id" element={<ProductPage />} />
          <Route path="/list" element={<ListPage />}
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
