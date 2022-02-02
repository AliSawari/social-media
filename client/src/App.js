import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loading from "./components/Loading/Loading";
import UserProvider from "./context/providers/UserProvider";
import PrivateRoute from "./components/PrivateRoute";
const LoginPage = lazy(() => import("./pages/Auth/LoginPage"));
const RegisterPage = lazy(() => import("./pages/Auth/RegisterPage"));
const MainPage = lazy(() => import("./pages/Main/MainPage"));
const AddPost = lazy(() => import("./pages/AddPost/AddPostPage"));
const User = lazy(() => import("./pages/User/User"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <UserProvider>
        <Routes>
          <Route
            index
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route path="/post">
            <Route
              path="add"
              element={
                <PrivateRoute>
                  <AddPost />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="/user">
            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path="@:username"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
        </Routes>
      </UserProvider>
    </Suspense>
  );
}

export default App;
