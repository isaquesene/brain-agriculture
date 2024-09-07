import { useGetDashboardMetricsQuery } from "@/state/api";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const colors = ["#00C49F", "#FFBB28"];

const CardPieChartUsoSolo = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  const totalAgricultavel = dashboardMetrics?.popularProdutores.reduce(
    (acc, produtor) => acc + produtor.areaAgricultavel, 0
  ) || 0;

  const totalVegetacao = dashboardMetrics?.popularProdutores.reduce(
    (acc, produtor) => acc + produtor.areaVegetacao, 0
  ) || 0;

  const pieData = [
    { name: "Área Agricultável", value: totalAgricultavel },
    { name: "Vegetação", value: totalVegetacao }
  ];

  return (
    <div className="row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      {isLoading ? (
        <div className="m-5">Carregando...</div>
      ) : (
        <>
          {/* HEADER */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Uso do Solo
            </h2>
            <hr />
          </div>
          {/* BODY */}
          <div className="xl:flex justify-between pr-7">
            {/* CHART */}
            <div className="relative basis-3/5">
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={50}
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="font-bold text-xl">Uso do Solo</span>
              </div>
            </div>
            {/* LABELS */}
            <ul className="flex flex-col justify-around items-center xl:items-start py-5 gap-3">
              {pieData.map((entry) => (
                <li key={entry.name} className="flex items-center text-xs">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: colors[pieData.indexOf(entry) % colors.length] }}
                  ></span>
                  <span>{entry.name}: {entry.value.toFixed(2)} hectares</span>
                </li>
              ))}
            </ul>
          </div>
          <div></div>
        </>
      )}
    </div>
  );
};

export default CardPieChartUsoSolo;
