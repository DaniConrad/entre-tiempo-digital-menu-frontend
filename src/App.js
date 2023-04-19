import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/Admin/ProtectedRoute/ProtectedRoute'
import AdminLogin from './components/Admin/AdminLogin';
import AdminUploadsProducts from './components/Admin/AdminUploadProducts/AdminUploadsProducts';

function App() {
  
  return (

    <BrowserRouter>
      <div className="App">
          <Routes>
          <Route path='/' element={<ItemListContainer />}  />
          <Route path='/adminuploads' element={<AdminUploadsProducts />}  />
          
              </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
