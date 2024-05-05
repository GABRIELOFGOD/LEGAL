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
const LazyTrack = lazy(() => import('../pages/CaseLogin'));
const LazyTrackPage = lazy(() => import('../pages/TrackCase'));
const LazyContact = lazy(() => import('../pages/Contact'));
const LazyAbout = lazy(() => import('../pages/About'));
const LazyAgenda = lazy(() => import('../pages/Agenda'));

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
        element: <Suspense fallback={<Loader />}><LazyTrackPage /></Suspense>
      },
      {
        path: 'contact',
        element: <Suspense fallback={<Loader />}><LazyContact /></Suspense>
      },
      {
        path: 'about',
        element: <Suspense fallback={<Loader />}><LazyAbout /></Suspense>
      },
      {
        path: 'agenda',
        element: <Suspense fallback={<Loader />}><LazyAgenda /></Suspense>
      },
      // {
      //   path: 'track',
      //   element: <Suspense fallback={<Loader />}><LazyTrackPage /></Suspense>
      // },
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