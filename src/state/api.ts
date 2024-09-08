import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface NewProdutores {
    cpf?:             string;
    cnpj?:            string;
    nome:             string;
    nomeFazenda:      string;
    cidade:           string;
    estado:           string;
    areaTotal:        number;
    areaAgricultavel: number;
    areaVegetacao:    number;
    culturas:         string[];
}

export interface Produtores {
    produtorId:       string;
    cpf?:             string;
    cnpj?:            string;
    nome:             string;
    nomeFazenda:      string;
    cidade:           string;
    estado:           string;
    areaTotal:        number;
    areaAgricultavel: number;
    areaVegetacao:    number;
    culturas:         string[];
}

export interface User {
    userId:  string;
    name:    string;
    email:   string;
}

export interface DashboardMetrics {
    popularProdutores: Produtores[];
    user: User[];
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath: 'api',
    tagTypes: ["DashboardMetrics", "Produtores", "Users"],
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
            providesTags: ["Produtores"],
        }),
        createProdutor: build.mutation<Produtores, NewProdutores>({
            query: (newProdutores) => ({
                url: "/produtores",
                method: "POST",
                body: newProdutores
            }),
            invalidatesTags: ["Produtores"],
        }),
        updateProdutor: build.mutation<Produtores, { id: string, data: NewProdutores }>({
            query: ({ id, data }) => ({
                url: `/produtores/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Produtores"],
        }),
        deleteProdutor: build.mutation<void, string>({
            query: (produtorId) => ({
                url: `/produtores/${produtorId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Produtores"],
        }),
        getUsers: build.query<User[], void>({
            query: () => "/users",
            providesTags: ["Users"],
        }),
    }),
});

export const { 
    useGetDashboardMetricsQuery, 
    useGetProdutoresQuery, 
    useCreateProdutorMutation, 
    useUpdateProdutorMutation, 
    useDeleteProdutorMutation,
    useGetUsersQuery 
} = api;