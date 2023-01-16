import { Suspense } from 'react';
import {
  Route,
  Routes,
} from "react-router-dom"
import { Outlet, Navigate} from 'react-router-dom';

import Home from './views/Home'
import OnBoarding from './views/Onboarding'


const ProtectRoute = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn')
  return (
    <Suspense fallback={<span>Loading...</span>}>
      {
        isLoggedIn ?
          <Outlet />
       : <Navigate to={'/onboard'}/>
      }
    </Suspense>
  );
};


const routes = [
  {
    path: '/',
    name: 'Home',
    Element: Home
  },
  {
    path: '/onboard',
    name: 'On Boarding',
    Element: OnBoarding
  },
]

const Router = () => {
  return (
    <Routes>
      <Route element={<OnBoarding/>} path={'/onboard'} />
      <Route element={<ProtectRoute />}>
        {routes.map((page, idx) => {
          const Element = page.Element
          return (
            <Route
              key={idx}
              element={<Element/>}
              path={page.path}
            />
          )}
        )}
      </Route>
    </Routes>
  )
}

export default Router
