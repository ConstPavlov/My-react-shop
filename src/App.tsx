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
import Laptops from './pages/kompyutery-pages/kompyutery-secondry/laptops/linksCarousel/LaptopLinks';
import LaptopsAll from './pages/kompyutery-pages/kompyutery-secondry/laptops/pages/LaptopsAll';
import LaptopLinks from './pages/kompyutery-pages/kompyutery-secondry/laptops/linksCarousel/LaptopLinks';
import LaptopsTransformery from './pages/kompyutery-pages/kompyutery-secondry/laptops/pages/LaptopsTransformery';
import LaptopsMonitorsLinks from './pages/kompyutery-pages/kompyutery-secondry/blocks-monitors/linksCarousel/LaptopsMonitorsLinks';
import SisBlocks from './pages/kompyutery-pages/kompyutery-secondry/blocks-monitors/pages/SisBlocks';
import TelevizoryICifTv from './pages/televizory-pages/televizory-secondary/televizori-i-cif-tv/linksCarousel/TelevizoryICifTv';
import TelevizoryAll from './pages/televizory-pages/televizory-secondary/televizori-i-cif-tv/pages/TelevizoryAll';
import Televizory4k from './pages/televizory-pages/televizory-secondary/televizori-i-cif-tv/pages/Televizory4k';

function App() {
  const [query, setQuery] = React.useState('');

  // const filterItems = products.filter((product: any) =>
  //   product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1),
  // );

  return (
    <>
      <ChangeContext.Provider value={{ query, setQuery }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/favorites" element={<Favorites />} />
            </Route>
            <Route path="/" element={<TovarsLayout />}>
              <Route path="/noutbuki-planshety-i-kompyutery" element={<Kompyutery />} />
              <Route path="/televizory-i-video" element={<Televizory />} />
              <Route path="/telefones" element={<TelefonesAll />} />
              <Route path="/smartfony-i-svyaz" element={<Smartfony />} />
              <Route path="/samsung" element={<Samsung />} />
              <Route path="/honor" element={<Honor />} />
              <Route path="/gadgets" element={<Gadgets />} />
              <Route path="/noutbuki-planshety-komputery-links" element={<LaptopLinks />} />
              <Route path="/laptops" element={<LaptopsAll />} />
              <Route path="/noutbuki-transformery" element={<LaptopsTransformery />} />
              <Route path="/laptops-i-monitors" element={<LaptopsMonitorsLinks />} />
              <Route path="/sistemnye-bloki" element={<SisBlocks />} />
              // Телеки
              <Route path="/televizory-i-cifrovoe-tv" element={<TelevizoryICifTv />} />
              <Route path="/televizory-all" element={<TelevizoryAll />} />
              <Route path="/televizory-4k" element={<Televizory4k />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChangeContext.Provider>
    </>
  );
}

export default App;
