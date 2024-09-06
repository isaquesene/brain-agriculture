import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDashboardMetrics } from "../../../server/src/controllers/dashboardController";

export interface Produtores {
    produtorId:       String;
    cpf:              String;
    cnpj:             String;
    nome:             String;
    nomeFazenda:      String;
    cidade:           String;
    estado:           String;
    areaTotal:        number;
    areaAgricultavel: number;
    areaVegetacao:    number;
    culturas:         String[];
}

export interface User {
    userId:  String;
    name:    String;
    email:   String;
}

export interface DashboardMetrics {
    popularProdutores: Produtores[];
    user: User[];
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath: 'api',
    tagTypes: ["DashboardMetrics"],
    endpoints: (build) => ({
        getDashboardMetrics: build.query<DashboardMetrics, void>({
            query: () => "/dashboard",
            providesTags: ["DashboardMetrics"]
        })
    }),
});

export const { useGetDashboardMetricsQuery } = api;