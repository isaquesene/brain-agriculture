import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface NewProdutores {
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
    tagTypes: ["DashboardMetrics", "Produtores"],
    endpoints: (build) => ({
        getDashboardMetrics: build.query<DashboardMetrics, void>({
            query: () => "/dashboard",
            providesTags: ["DashboardMetrics"]
        }),
        getProdutores: build.query<Produtores[], string | void>({
            query: (search) => ({
                url: "/produtores",
                params: search ? {search} : {}
             }),
            providesTags: ["Produtores"]
        }),
        createProdutores: build.mutation<Produtores, NewProdutores>({
            query: (newProdutores) => ({
                url: "/produtores",
                method: "POST",
                body: newProdutores
            }),
            invalidatesTags: ["Produtores"]
        })
    }),
});

export const { useGetDashboardMetricsQuery, useGetProdutoresQuery, useCreateProdutoresMutation} = api;