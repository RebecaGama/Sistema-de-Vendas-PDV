import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Login from './pages/login';
import Vender from './pages/vender';
import Produtos from './pages/produtos';
import Vendas from './pages/vendas';
import User from './pages/user';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Login />} />
                    <Route path='/vender' element={<Vender />} />
                    <Route path='/produtos' element={<Produtos />} />
                    <Route path='/vendas' element={<Vendas />} />
                    <Route path='/user' element={<User />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
