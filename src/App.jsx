import React, { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import NotFound from '../pages/NotFound'
import { CreateUserContext } from '../utils/context'
import { Toaster } from 'react-hot-toast'

// ================= LAZY PAGES ================== //
const LazyHome = lazy(() => import('../pages/HomePage'));
const LazyReport = lazy(() => import('../pages/Report'));
const LazyTrack = lazy(() => import('../pages/CaseLogin'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Suspense fallback={<Loader />}><LazyHome /></Suspense>
      },
      {
        path: 'report',
        element: <Suspense fallback={<Loader />}><LazyReport /></Suspense>
      },
      {
        path: 'track-case',
        element: <Suspense fallback={<Loader />}><LazyTrack /></Suspense>
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

const App = () => {
  return (
    <CreateUserContext>
      <RouterProvider router={router} />
      <Toaster />
    </CreateUserContext>
  )
}

export default App