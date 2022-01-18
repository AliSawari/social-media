import { Route, Routes } from "react-router";
import MainPage from "./pages/Main/MainPage";

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  );
}

export default App;
