import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}
