import React, { useEffect } from "react";
import Lenis from 'lenis'
import { createBrowserRouter, RouterProvider, useLocation } from "react-router";
import Navbar from "../pages/Navbar";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from '../pages/SignUp'
import Rentals from '../pages/Rentals'
import DashBoard from '../pages/DashBoard'
const Layout = ({ children }) => {
 const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,         
      easing: (t) => t,      
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.scrollTo(0, { immediate: false });

    return () => lenis.destroy(); 
  }, [location]);


  return (
    <div className="min-h-screen w-full">
      <Navbar />
      {children}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/rentals",
    element: (
      <Layout>
        <Rentals />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <SignUp/>
      </Layout>
    ),
  },
  {
    path: "/dashBoard",
    element: (
      <Layout>
        <DashBoard/>
      </Layout>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
