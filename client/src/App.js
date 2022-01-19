import { Route, Routes } from "react-router";
import UserProvider from "./context/providers/UserProvider";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import MainPage from "./pages/Main/MainPage";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
