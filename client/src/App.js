import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loading from "./components/Loading/Loading";
import UserProvider from "./context/providers/UserProvider";
import PrivateRoute from "./components/PrivateRoute";
const LoginPage = lazy(() => import("./pages/Auth/LoginPage"));
const RegisterPage = lazy(() => import("./pages/Auth/RegisterPage"));
const MainPage = lazy(() => import("./pages/Main/MainPage"));
const AddPost = lazy(() => import("./pages/AddPost/AddPostPage"));
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
        </Routes>
      </UserProvider>
    </Suspense>
  );
}

export default App;
