import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SecretView } from './pages/Secret/SecretView.tsx';
import { HomeView } from './pages/Home/HomeView.tsx';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'

const router = createBrowserRouter([
    { index: true, element: <HomeView /> },
    { path: '/secret', element: <SecretView /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
