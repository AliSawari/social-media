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
const ChatList = lazy(() => import("./pages/Chat/List/Chat"));
const NotificationList = lazy(() => import("./pages/Notification/List/List"));
const Saved = lazy(() => import("./pages/Saved/Saved"));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <UserProvider>
        <ChatProvider>
          <Routes>
            <Route path="/auth">
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>



            <Route index element={<MainPage />} />

            <Route path="/post">
              <Route path="add" element={<AddPost />} />
            </Route>

            <Route path="/user">
              <Route
                path="profile"
                element={
                  <Profile />
                }
              />


              <Route
                path="saved"
                element={
                  <Saved />
                }
              />
            </Route>

            <Route path="/chat">
              <Route
                path="list"
                element={
                  <ChatList />
                }
              />

              <Route
                path="list/:id"
                element={
                  <ChatList />
                }
              />
            </Route>

            <Route path="/notifications">
              <Route
                path="list"
                element={
                  <NotificationList />
                }
              />
            </Route>

            <Route
              path="@:username"
              element={
                <User />
              }
            />
          </Routes>
        </ChatProvider>
      </UserProvider>
    </Suspense>
  );
}

export default App;
