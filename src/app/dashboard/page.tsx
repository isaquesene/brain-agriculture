"use client";

import CardPopularProdutores from "./CardPopularProdutores";
import CardPizzaProdutoresEstados from "./CardPizzaProdutoresEstados";
import CardPizzaProdutoresCulturas from "./CardPizzaProdutoresCulturas";
import CardPizzaProdAgricutavelVegetacao from "./CardPizzaProdAgricutavelVegetacao";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
            <CardPopularProdutores />
            <CardPizzaProdutoresEstados />
            <CardPizzaProdutoresCulturas />
            <CardPizzaProdAgricutavelVegetacao />
        </div>
    );
};

export default Dashboard;