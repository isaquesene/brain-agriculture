"use client";

import { useCreateProdutorMutation, useGetProdutoresQuery, useUpdateProdutorMutation, useDeleteProdutorMutation } from "@/state/api";
import Headers from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PlusCircleIcon, Search, Trash2, Pencil } from "lucide-react";
import { useState } from "react";
import CreateProdutorModal from "./CreateProdutorModal";
import EditProdutorModal from "./EditarProdutorModal";

const formatCpf = (cpf: string | undefined) => {
  if (!cpf) return "";
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

const formatCnpj = (cnpj: string | undefined) => {
  if (!cnpj) return "";
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};

// Tipo dos dados do formulário
type ProdutorFormData = {
  nome: string;
  cpf: string;
  cnpj: string;
  nomeFazenda: string;
  cidade: string;
  estado: string;
  areaTotal: number;
  areaAgricultavel: number;
  areaVegetacao: number;
  culturas: string[];
};

const Produtores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { data: produtores, isError, isLoading } = useGetProdutoresQuery(searchTerm);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProdutor, setSelectedProdutor] = useState(null); 

  const [createProdutor] = useCreateProdutorMutation();
  const handleCreateProdutor = async (produtorData: ProdutorFormData) => {
    await createProdutor(produtorData);
  };

  const [deleteProdutor] = useDeleteProdutorMutation(); // Hook para deletar

  const handleDelete = async (produtorId: number) => {
    if (confirm("Tem certeza que deseja deletar este produtor?")) {
      await deleteProdutor(produtorId.toString());
    }
  };

  const [updateProdutor] = useUpdateProdutorMutation();
  const handleEdit = (produtor) => {
    setSelectedProdutor(produtor);
    setIsEditModalOpen(true);
  };

  const columns: GridColDef[] = [
    { field: "produtorId", headerName: "ID", width: 90 },
    { field: "nome", headerName: "Nome Produtor", width: 200 },
    { 
      field: "cpf", 
      headerName: "CPF", 
      width: 200, 
      renderCell: (params) => <span>{params.value ? formatCpf(params.value) : ""}</span>
    },
    { 
      field: "cnpj", 
      headerName: "CNPJ", 
      width: 200, 
      renderCell: (params) => <span>{params.value ? formatCnpj(params.value) : ""}</span>
    },
    { field: "nomeFazenda", headerName: "Fazenda", width: 200 },
    { field: "cidade", headerName: "Cidade", width: 90 },
    { field: "estado", headerName: "Estado", width: 50 },
    { field: "areaTotal", headerName: "Area Total", width: 90 },
    { field: "areaAgricultavel", headerName: "Area Agricultavel", width: 90 },
    { field: "areaVegetacao", headerName: "Area Vegetação", width: 90 },
    { field: "culturas", headerName: "Cultura", width: 200 },
    {
      field: "edit",
      headerName: "Editar",
      width: 100,
      renderCell: (params) => (
        <button
          onClick={() => handleEdit(params.row)}
          className="text-blue-500 hover:text-blue-700"
        >
          <Pencil className="w-5 h-5" />
        </button>
      ),
    },
    {
      field: "actions",
      headerName: "Deletar",
      width: 150,
      renderCell: (params) => (
        <button
          onClick={() => handleDelete(params.row.produtorId)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      ),
    }
  ];
  
  if (isLoading) {
    return <div className="py-4">Carregando...</div>
  }

  if (isError || !produtores) {
    return (
      <div className="text-center text-red-500 py-4">
        Falha ao carregar os produtores!
      </div>
    );
  }

  // Filtrando os produtores *cultura é uma array
  const filteredProdutores = produtores.filter((produtor) => {
    const searchTermLower = searchTerm.toLowerCase();
    const culturasString = Array.isArray(produtor.culturas)
      ? produtor.culturas.join(", ").toLowerCase()
      : "";
  
    return (
      produtor.nome.toLowerCase().includes(searchTermLower) ||
      (produtor.cpf && formatCpf(produtor.cpf.toString()).toLowerCase().includes(searchTermLower)) ||
      (produtor.cnpj && formatCnpj(produtor.cnpj.toString()).toLowerCase().includes(searchTermLower)) ||
      produtor.nomeFazenda.toLowerCase().includes(searchTermLower) ||
      produtor.cidade.toLowerCase().includes(searchTermLower) ||
      produtor.estado.toLowerCase().includes(searchTermLower) ||
      culturasString.includes(searchTermLower)
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
        <Headers nome="Produtores" />
        <button 
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" /> Cadastrar Produtor
        </button>
      </div>
      <div className="flex flex-col">
        <DataGrid
          rows={filteredProdutores}
          columns={columns}
          getRowId={(row) => row.produtorId}
          checkboxSelection
          className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
        />
      </div>
      {/* MODAL */}
      <CreateProdutorModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProdutor}  
      />
      {selectedProdutor && (
        <EditProdutorModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedProdutor(null);
          }}
          produtor={selectedProdutor}
        />
      )}
    </div>
  );
};

export default Produtores;
