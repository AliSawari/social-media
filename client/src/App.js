import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loading from "./components/Loading/Loading";
import UserProvider from "./context/providers/UserProvider";
import ChatProvider from "./context/providers/ChatProvider";
import PrivateRoute from "./components/PrivateRoute";
const LoginPage = lazy(() => import("./pages/Auth/LoginPage"));
const RegisterPage = lazy(() => import("./pages/Auth/RegisterPage"));
const MainPage = lazy(() => import("./pages/Main/MainPage"));
const AddPost = lazy(() => import("./pages/AddPost/AddPostPage"));
const User = lazy(() => import("./pages/User/User"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const ChatList = lazy(() => import("./pages/Chat/List/List"));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <UserProvider>
        <ChatProvider>
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

            <Route path="/chat">
              <Route
                path="list"
                element={
                  <PrivateRoute>
                    <ChatList />
                  </PrivateRoute>
                }
              />

              <Route
                path="list/:id"
                element={
                  <PrivateRoute>
                    <ChatList />
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
        </ChatProvider>
      </UserProvider>
    </Suspense>
  );
}

export default App;
