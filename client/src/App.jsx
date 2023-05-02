import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { AccountPage, IndexPage, LoginPage, RegisterPage } from './pages';
import { DefaultLayout } from './layouts';
import { UserContextProvider } from './contexts/UserContext';

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<DefaultLayout />} >
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/account/:subpage?' element={<AccountPage />} />
          <Route path='/account/:subpage/:action' element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App