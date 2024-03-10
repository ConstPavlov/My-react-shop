import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Cart from './pages/basic-pages/cart/Cart';
import Favorites from './pages/basic-pages/favorites/Favorites';
import Home from './pages/basic-pages/Home';
import Kompyutery from './pages/kompyutery-pages/Kompyutery';
import Login from './pages/basic-pages/Login';
import Smartfony from './pages/Smartfony';
import TelefonesAll from './pages/phone-pages/TelefonesAll';
//@ts-ignore
import Televizory from './pages/Televizory';
import './scss/app.scss';
import Samsung from './pages/phone-pages/phone-secondary/Samsung';
import Honor from './pages/phone-pages/phone-secondary/Honor';
import Gadgets from './pages/phone-pages/phone-secondary/Gadgets';
import TovarsLayout from './Layouts/TovarsLayout';
import React from 'react';
import { ChangeEvent } from 'react';
import ChangeContext from './context/ChangeContext';
import AppRouter from './components/AppRouter';
import { fetchAuthCheck } from './redux/auth/asyncAction';
import { useAppDispatch } from './redux/store';

function App() {
  const [query, setQuery] = React.useState('');
  const dispatch = useAppDispatch();

  // const filterItems = products.filter((product: any) =>
  //   product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1),
  // );

  React.useEffect(() => {
    dispatch(fetchAuthCheck());
  }, []);

  return (
    <>
      <ChangeContext.Provider value={{ query, setQuery }}>
        <BrowserRouter>
          <AppRouter />
          {/* <Routes>
            <Route path="noutbuki-planshety-i-kompyutery" element={<Kompyutery />} />
            <Route path="televizory-i-video" element={<Televizory />} />
            <Route path="telefones" element={<TelefonesAll />} />
            <Route path="smartfony-i-svyaz" element={<Smartfony />} />
            <Route path="samsung" element={<Samsung />} />
            <Route path="honor" element={<Honor />} />
            <Route path="gadgets" element={<Gadgets />} />
            <Route path="noutbuki-planshety-komputery-links" element={<LaptopLinks />} />
            <Route path="laptops" element={<LaptopsAll />} />
            <Route path="noutbuki-transformery" element={<LaptopsTransformery />} />
            <Route path="laptops-i-monitors" element={<LaptopsMonitorsLinks />} />
            <Route path="sistemnye-bloki" element={<SisBlocks />} />
            // Телеки
            <Route path="televizory-i-cifrovoe-tv" element={<TelevizoryICifTv />} />
            <Route path="televizory-all" element={<TelevizoryAll />} />
            <Route path="televizory-4k" element={<Televizory4k />} />
          </Routes> */}
        </BrowserRouter>
      </ChangeContext.Provider>
    </>
  );
}

export default App;
