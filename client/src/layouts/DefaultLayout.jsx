import React from 'react';
import { Header } from '../components';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className='px-8 py-4 flex flex-col min-h-screen'>
      <Header />
      <Outlet />
    </div>
  )
}

export default DefaultLayout