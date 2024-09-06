"use client";

//import { useGetProdutoresQuery } from "@/state/api";
import { useState } from "react";

const Produtores = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  //const { data: produtores, isLoanding, isError } = useGetProdutoresQuery(searchTerm);

 {/**if (isLoanding) {
    return <div className="py-4">Carregando...</div>
  }

  if (isError || !produtores) {
    return (
      <div className="text-center text-red-500 py-4">
        Falha ao Registras o Produtor!
      </div>
    )
  }
  */}
  return (
    <div className="mx-auto pb-5 w-full">Produtores</div>
  );
};

export default Produtores;