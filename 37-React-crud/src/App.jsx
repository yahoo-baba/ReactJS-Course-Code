import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./pages/UsersList";
import AddEditUser from "./pages/AddEditUser";
import MainLayout from "./layout/MainLayout";

import { useRef } from "react";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

function App() {
  const toast = useRef(null);

  return (
    <BrowserRouter>
      <Toast ref={toast} />
      <ConfirmDialog />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<UsersList toast={toast} />} />
          <Route path="/add" element={<AddEditUser toast={toast} />} />
          <Route path="/edit/:id" element={<AddEditUser toast={toast} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
