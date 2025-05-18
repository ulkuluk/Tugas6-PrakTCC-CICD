import{BrowserRouter, Routes, Route} from 'react-router-dom';
import CatetanList from "./components/CatetanList";
import AddCatatan from "./components/AddCatatan";
import EditCatatan from './components/EditCatatan';
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/dashboard' element={<CatetanList/>}/>
        <Route path='/add' element={<AddCatatan/>}/>
        <Route path='/edit/:id' element={<EditCatatan/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
