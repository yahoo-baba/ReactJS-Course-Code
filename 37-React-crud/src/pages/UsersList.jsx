import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";

export default function UsersList({ toast }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const res = await api.get("/users");
    console.log(res);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = (id) => {
    confirmDialog({
      message: "Are you sure you want to delete this user?",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        await api.delete(`/users/${id}`);
        toast.current.show({
          severity: "success",
          summary: "Deleted",
          detail: "User deleted successfully",
          life: 2000,
        });
        fetchUsers();
      },
    });
  };

  const actionTemplate = (rowData) => (
    <>
      <Button
        icon="pi pi-pencil"
        className="p-button-sm p-button-warning mr-2"
        onClick={() => navigate(`/edit/${rowData.id}`)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-sm p-button-danger"
        onClick={() => deleteUser(rowData.id)}
      />
    </>
  );

  return (
    <div>
      <div className="flex justify-content-end mb-2">
        <Button
          label="Add User"
          icon="pi pi-plus"
          size="small"
          onClick={() => navigate("/add")}
        />
      </div>
      <DataTable
        value={users}
        showGridlines
        stripedRows
        paginator
        rows={5}
        size="small"
        filterDisplay="row"
      >
        <Column
          field="name"
          header="Name"
          sortable
          filter
          filterPlaceholder="Search"
        ></Column>
        <Column
          field="username"
          header="UserName"
          sortable
          filter
          filterPlaceholder="Search"
        ></Column>
        <Column
          field="email"
          header="Email"
          sortable
          filter
          filterPlaceholder="Search"
        ></Column>
        <Column
          field="age"
          header="Age"
          sortable
          filter
          filterPlaceholder="Search"
        ></Column>
        <Column
          header="Action"
          body={actionTemplate}
          style={{ width: "13%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
