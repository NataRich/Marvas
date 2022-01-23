import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
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
          <Route path="/product" element={<Product />} />
          <Route path="/signin" element={<Signin />} /> 
          <Route path="/signup" element={<Signup />} /> 
          {/* <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/item/:id" element={<ProductPage />} />
          <Route path="/list" element={<ListPage />}
          <Route path="/profile" element={<Profile />} />
          */}
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
