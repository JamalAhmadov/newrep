import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Jobseekers from "./Pages/Jobseekers/Jobseekers";
import Userdetail from "./Pages/Jobseekers/Userdetail";
import NotFound from "./Pages/Notfound/NotFound";
import Footer from "./Components/Footer/Footer";
import Settings from "./Pages/Userpages/Settings";
import Bookmarks from "./Pages/Userpages/Bookmarks";
import Information from "./Pages/Userpages/Information";
import Profile from "./Pages/Userpages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Redux/authSlice";
import ProtectedRoute from "./Pages/ProtectedRoute";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
          <Route path="/jobseekers" element={<Jobseekers />} />
          <Route path="/jobseekers/users/:id" element={<Userdetail />} />
          <Route path="/not-found" element={<NotFound />} />

          {user && (
            <Route element={<ProtectedRoute role={user.role} />}>
              <Route path="/dashboard" element={<Profile />}>
                <Route path="information" element={<Information />} />
                <Route path="bookmarks" element={<Bookmarks />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
          )}

          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;
