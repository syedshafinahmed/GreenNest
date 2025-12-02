import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Plants from './Components/Plants/Plants.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import { FadeLoader } from 'react-spinners';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import PlantDetails from './Components/PlantDetails/PlantDetails.jsx';
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import Loading from './Components/Loading/Loading.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import Contact from './Components/Contact/Contact.jsx';

const dataPromise = fetch('/plants.json').then(res => res.json());
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element:
          <Suspense fallback={<span className='fixed inset-0 flex justify-center items-center bg-white z-50'><FadeLoader color="#047857" size={100} /></span>}>
            <Home dataPromise={dataPromise}></Home>
          </Suspense>,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/plants",
        element:
          <Suspense fallback={<span className='fixed inset-0 flex justify-center items-center bg-white z-50'><FadeLoader color="#047857" size={100} /></span>}>
            <Plants dataPromise={dataPromise}></Plants>
          </Suspense>,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/plants/:id",
        element:
          <Suspense fallback={<span className='fixed inset-0 flex justify-center items-center bg-white z-50'><FadeLoader color="#047857" size={100} /></span>}>
            {/* <PrivateRoute> */}
            <PlantDetails dataPromise={dataPromise}></PlantDetails>
            {/* </PrivateRoute> */}
          </Suspense>,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/profile",
        Component: Profile
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/about-us",
        Component: AboutUs
      },
      {
        path: "/contact",
        Component: Contact
      },

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
