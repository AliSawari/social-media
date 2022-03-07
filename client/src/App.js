import { lazy, Suspense, useEffect, useState } from "react";
import { useRoutes } from "react-router";
import Loading from "./components/Loading/Loading";
import UserProvider from "./context/providers/UserProvider";
import PrivateRoute from "./components/PrivateRoute";
import Offline from "./components/Offline/Offline";
const Explore = lazy(() => import("./pages/Explore/Explore"));
const Privacy = lazy(() => import("./pages/Settings/Privacy/Privacy"));
const ChangePassword = lazy(() => import("./pages/Settings/ChangePassword"));
const ChatSettings = lazy(() => import("./pages/Settings/ChatSettings/ChatSettings"));
const LoginPage = lazy(() => import("./pages/Auth/LoginPage"));
const RegisterPage = lazy(() => import("./pages/Auth/RegisterPage"));
const MainPage = lazy(() => import("./pages/Main/MainPage"));
const AddPost = lazy(() => import("./pages/AddPost/AddPostPage"));
const User = lazy(() => import("./pages/User/User"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const ChatList = lazy(() => import("./pages/Chat/List/Chat"));
const Settings = lazy(() => import("./pages/Settings/Settings"));
const NotificationList = lazy(() => import("./pages/Notification/List/List"));
const Saved = lazy(() => import("./pages/Saved/Saved"));
const Welcome = lazy(() => import("./pages/Welcome/Welcome"));
const Logout = lazy(() => import("./pages/Logout/Logout"));
function App() {

  const [offline, setOffline] = useState(false);

  useEffect(() => {

    window.addEventListener("offline", () => {
      setOffline(true);
    });

    window.addEventListener("online", () => {
      setOffline(false);
    });


  }, []);

  const routes = useRoutes([
    {
      path: "/welcome",
      element: <Welcome />
    },
    {
      path: "/auth", children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
      ]
    },
    {
      path: "/",
      element: <PrivateRoute><MainPage /></PrivateRoute>
    },

    {
      path: "/post", children: [
        { path: "add", element: <PrivateRoute><AddPost /></PrivateRoute> }
      ]
    },
    {
      path: "/user", children: [
        {
          path: "profile",
          element: <PrivateRoute> <Profile /></PrivateRoute>
        },
        {
          path: "saved",
          element: <PrivateRoute> <Saved /></PrivateRoute>
        },
        {
          path: "logout",
          element: <PrivateRoute> <Logout /></PrivateRoute>
        },

      ]
    },
    {
      path: "/chat",
      children: [
        {
          path: "list",
          element: <PrivateRoute> <ChatList /></PrivateRoute>
        },
        {
          path: "list/:id",
          element: <PrivateRoute> <ChatList /></PrivateRoute>
        },
      ]
    },
    {
      path: "/notifications",
      children: [
        {
          path: "list",
          element: <PrivateRoute> <NotificationList /></PrivateRoute>
        }
      ]
    },
    {
      path: "/settings",
      children: [
        {
          path: "main",
          element: <PrivateRoute> <Settings /></PrivateRoute>
        },
        {
          path: "change_password",
          element: <PrivateRoute><ChangePassword /></PrivateRoute>
        },

        {
          path: "chat_settings",
          element: <PrivateRoute><ChatSettings /></PrivateRoute>
        },
        {
          path: "privacy",
          element: <PrivateRoute><Privacy /></PrivateRoute>
        },
      ]
    },
    {
      path: "/explore",
      element: <PrivateRoute><Explore /></PrivateRoute>
    },
    {
      path: "@:username",
      element: <PrivateRoute> <User /></PrivateRoute>
    },
  ]);


  return (
    <Suspense fallback={<Loading />}>
      <UserProvider>
        {!offline ? routes : <Offline />}
      </UserProvider>
    </Suspense>
  );
}

export default App;
