import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { AccountPage, IndexPage, LoginPage, RegisterPage } from './pages';
import { DefaultLayout } from './layouts';
import { UserContextProvider } from './contexts/UserContext';
import { SERVER_BASE_URL } from './constants';

axios.defaults.baseURL = SERVER_BASE_URL;
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<DefaultLayout />} >
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/account/:subpage?' element={<AccountPage />} />
          <Route path='/account/:subpage/:action' element={<AccountPage />} />
          <Route path='/account/:subpage/:action/:id' element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App