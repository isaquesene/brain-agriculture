"use client";

import { useGetUsersQuery } from "@/state/api";
import Headers from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { Search } from "lucide-react";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: users, isError, isLoading } = useGetUsersQuery();

  const columns: GridColDef[] = [
    { field: "userId", headerName: "ID", width: 90 },
    { field: "name", headerName: "Nome Usuério", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
  ];
  
  if (isLoading) {
    return <div className="py-4">Carregando...</div>
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">
        Falha ao carregar os produtores!
      </div>
    );
  }

  // Filtrando os produtores *cultura é uma array
  const filteredUsers = users.filter((user) => {
    const searchTermLower = searchTerm.toLowerCase();
  
    return (
      user.name.toLowerCase().includes(searchTermLower) ||
      user.email.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <div className="mx-auto pb-5 w-full">
      {/* SEARCH */}
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <Search className="w-5 h-5 text-gray-500 m-2" />
          <input
            className="w-full py-2 px-4 rounded bg-white"
            placeholder="Pesquise aqui..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* HEADER BAR */}
      <div className="flex justify-between items-center mb-6">
        <Headers nome="Users" />
      </div>
      <div className="flex flex-col">
        <DataGrid
          rows={filteredUsers}
          columns={columns}
          getRowId={(row) => row.userId}
          checkboxSelection
          className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
        />
      </div>
    </div>
  );
};

export default Users;
