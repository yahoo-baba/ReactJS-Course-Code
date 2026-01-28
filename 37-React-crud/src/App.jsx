import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./pages/UsersList";
import AddEditUser from "./pages/AddEditUser";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<UsersList />} />
          <Route path="/add" element={<AddEditUser />} />
          <Route path="/edit/:id" element={<AddEditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
