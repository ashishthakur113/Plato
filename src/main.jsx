import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvide from './context/StoreContext.jsx';
import { Provider } from 'react-redux';
import { store } from './redux-tookit/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <StoreContextProvide>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreContextProvide>
    </Provider>
  </StrictMode>
);
