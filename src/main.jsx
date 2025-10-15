import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { PostsProvider } from './context/PostsContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PostsProvider>
        <App />
        <Toaster position="bottom-right" />
      </PostsProvider>
    </BrowserRouter>
  </React.StrictMode>
);