import { useGetDashboardMetricsQuery } from "@/state/api";
import { DraftingCompass } from "lucide-react";
import React from "react";

const CardPopularProdutores = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  // Calcula o total de fazendas e área total (hectares)
  const totalProdutores = dashboardMetrics?.popularProdutores.length || 0;
  const totalArea = dashboardMetrics?.popularProdutores.reduce(
    (acc, produtor) => acc + produtor.areaTotal, 0
  ) || 0;

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-4">
      {isLoading ? (
        <div className="m-5">Carregando...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Produtores
          </h3>
          <div className="px-7 py-3">
            <div className="text-sm font-semibold">
              <div className="font-bold text-gray-700">Total de Fazendas:</div>
              {totalProdutores}
            </div>
            <div className="text-sm font-semibold">
              <div className="font-bold text-gray-700">Total de Fazendas (Área Total):</div>
              {totalArea.toFixed(2)} hectares
            </div>
          </div>
          <hr />
          {/* Conteúdo rolável */}
          <div className="overflow-y-auto h-96 px-5"> 
            {dashboardMetrics?.popularProdutores.map((produtor) => (
              <div
                key={produtor.produtorId}
                className="flex items-center justify-between gap-3 py-5 border-b"
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-gray-700">{produtor.nome}</div>
                    <div className="flex text-sm items-center">
                      <div>{produtor.nomeFazenda}</div>
                      <span className="mx-2">|</span>
                      <div>{produtor.cidade}</div>
                    </div>
                  </div>
                </div>

                <div className="text-xs flex items-center">
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                    <DraftingCompass className="w-4 h-4" />
                  </button>
                  {produtor.areaTotal}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProdutores;
