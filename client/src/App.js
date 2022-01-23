import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Header from './common/header/Header'
import Footer from './common/footer/Footer';
import Product from './common/product/Product';
import './App.less';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/marketplace" element={<Marketplace />} /> */}
          <Route path="/product/:id" element={<Product />} />
          {/* <Route path="/list" element={<ListPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
