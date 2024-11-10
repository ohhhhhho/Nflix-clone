import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import {QueryClient , QueryClientProvider} from '@tanstack/react-query' 
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const client = new QueryClient();
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
