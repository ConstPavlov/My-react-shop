import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './scss/app.scss';
import React from 'react';
import ChangeContext from './context/ChangeContext';
import AppRouter from './router/AppRouter';
import { fetchAuthCheck } from './redux/auth/asyncAction';
import { useAppDispatch } from './redux/store';

function App() {
  const [query, setQuery] = React.useState('');
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthCheck());
  }, []);

  return (
    <>
      <ChangeContext.Provider value={{ query, setQuery }}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ChangeContext.Provider>
    </>
  );
}

export default App;
