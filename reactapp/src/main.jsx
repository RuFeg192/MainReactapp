import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider} from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router'

import App from './App.jsx'
import store from './store/store.jsx'
import Home from './components/home/home'
import Counter from './components/counter/counter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/counter', element: <Counter /> },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
  </StrictMode>
);
