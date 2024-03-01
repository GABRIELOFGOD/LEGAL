import React, { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import NotFound from '../pages/NotFound'
import { CreateUserContext } from '../utils/context'

// ================= LAZY PAGES ================== //
const LazyHome = lazy(() => import('../pages/HomePage'));
const LazyReport = lazy(() => import('../pages/Report'));

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
    </CreateUserContext>
  )
}

export default App