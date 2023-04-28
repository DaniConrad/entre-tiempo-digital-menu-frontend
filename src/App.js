import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ProtectedRoute} from './components/Admin/ProtectedRoute/ProtectedRoute'
import AdminLogin from './components/Admin/AdminLogin';
import AdminUploadsProducts from './components/Admin/AdminUploadProducts/AdminUploadsProducts';
import { useState } from 'react';

function App() {
  const [current, setCurrent] = useState({})

  const currentUser = (user) => {
    if (user === "dani") setCurrent({user: "dani"})

    setCurrent({user: null})
  }

   

  return (

    <BrowserRouter>
      <div className="App">
          <Routes>
          <Route path='/' element={<ItemListContainer />}  />
          <Route path='/adminlogin' element={<AdminLogin user={ currentUser } />}  />
          
            <Route path='/adminuploads' 
                  element={
                    <ProtectedRoute>
                      <AdminUploadsProducts />
                    </ProtectedRoute>
                      
                  }
            />
              </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
