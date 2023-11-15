import './App.css';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import DefPage from './pages/defPage';
import MainPage from './pages/feladatPages';


const router = createBrowserRouter([

  {
    path: '/',
    element: <DefPage />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/events',
        element: <div></div>
      }
    ]
  }

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;