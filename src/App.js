import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Routes, Route, HashRouter } from 'react-router-dom';
import AdminUploadsProducts from './components/Admin/AdminUploadProducts/AdminUploadsProducts';

function App() {
   

  return (

    <HashRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<ItemListContainer /> }  />
            <Route path='/adminuploads' element={ <AdminUploadsProducts /> } />
          </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
