import React from 'react'
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './contexts/auth';
import RoutesApp from './routes';
import GlobalStyle from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider >
      <RoutesApp />
      <GlobalStyle/>
      <ToastContainer />
    </ AuthProvider>
  );
}

export default App;
