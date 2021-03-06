import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Header from './common/header/Header'
import Footer from './common/footer/Footer';
import Product from './common/product/Product';
import List from './pages/list/List';
import Marketplace from './pages/marketplace/Marketplace';
import './App.less';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/signin" element={<Signin />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/list" element={<List />} />
          <Route path="/marketplace" element={<Marketplace />} />
          {/* <Route path="/item/:id" element={<ProductPage />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
