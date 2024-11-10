import {createBrowserRouter} from 'react-router-dom'
import Home from './Routes/Home'
import Tv from './Routes/Tv'
import App from './App';
import Search from './Routes/Search';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
          {
            path: '',
            element: <Home />,
          },
          {
            path: 'movie/:id',
            element: <Home />,
          },
          {
            path: '/tv',
            element: <Tv />,
          },
          {
            path: '/search',
            element: <Search />,
          },
        ],
      },
    ]);
    