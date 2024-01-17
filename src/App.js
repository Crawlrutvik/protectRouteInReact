import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Upoadfrom from "./component/Upoadfrom";
import Header from "./component/Header/Header";
import Contect from "./component/Contect/Contect";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Service from "./component/Service/Service";
import NotError from "./component/NotError/NotError";
// import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
import Layout from "./component/Layout/Layout";
import { Suspense, lazy, useEffect } from "react";
import Card from "./component/Service/Card";
const Login = lazy(() => import("./component/Login/Login"));
function App() {
  useEffect(() => {
    // console.log("object", typeof (() => {}));
  }, []);
  return (
    <>
      {/* <Upoadfrom /> */}
      <BrowserRouter>
        {/* {storeg ? <Header /> : ""} */}
        {/* <Route path="/login" element={<Login />} /> */}

        <Routes>
          <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              // <ProtectedRoute>
              <Register />
              // </ProtectedRoute>
            }
          />
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/service"
              element={
                <ProtectedRoute>
                  <Service />
                </ProtectedRoute>
              }
            />
            <Route
              path="/service/:id"
              element={
                <ProtectedRoute>
                  <Card />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contect"
              element={
                <ProtectedRoute>
                  <Contect />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="*" element={<NotError />} />
        </Routes>
      </BrowserRouter>
      {/* <Contect/> */}
    </>
  );
}

export default App;
