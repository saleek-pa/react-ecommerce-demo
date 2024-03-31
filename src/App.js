import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import UsersList from './pages/UsersList';
import ProductDetails from './pages/ProductDetails';
import ProductsByCategory from './pages/ProductsByCategory';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/categories/:categoryID/products" element={<ProductsByCategory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
