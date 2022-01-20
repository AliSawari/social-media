import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loading from "./components/Loading/Loading";
import UserProvider from "./context/providers/UserProvider";
const LoginPage = lazy(() => import("./pages/Auth/LoginPage"));
const RegisterPage = lazy(() => import("./pages/Auth/RegisterPage"));
const MainPage = lazy(() => import("./pages/Main/MainPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <UserProvider>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </UserProvider>
    </Suspense>
  );
}

export default App;
