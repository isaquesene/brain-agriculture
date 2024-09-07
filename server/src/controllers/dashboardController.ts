import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardMetrics = async (
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const popularProdutores = await prisma.produtores.findMany({
            take: 15,
            orderBy: {
                produtorId: 'desc',
            },
        });

        //outras métricas

        res.json({
            popularProdutores,
        });
    } catch (error) {
        res.status(500).json({ message: "Erro ao carregar os dados no Dashboard" });
    }
};
