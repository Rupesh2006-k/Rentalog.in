import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../pages/Navbar";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import Rentals from '../pages/Rentals'
// ✅ Layout Component (so Navbar appears on every page)
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      {children}
    </div>
  );
};

// ✅ Data Router Configuration
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
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
