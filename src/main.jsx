import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import ThemeProvider from './Contexts/ThemeProvider/ThemeProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Contexts/AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routes/Routes.jsx'
import ToasterProvider from './components/Toastprovider/ToastProvider.jsx'
import { NextUIProvider } from '@nextui-org/react'

import 'react-tooltip/dist/react-tooltip.css'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const helmetContext = {};
// Create a client
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NextUIProvider>
        <HelmetProvider context={helmetContext}>
            <AuthProvider>
              <ToasterProvider />
              <RouterProvider router={router} />

            </AuthProvider>

          </HelmetProvider>
        </NextUIProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
