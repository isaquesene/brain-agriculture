import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Buscar Produtor
export const getProdutores = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const search = req.query.search?.toString();
        const produtores = await prisma.produtores.findMany({
            where: {
                nome: {
                    contains: search,
                },
            },
        });
        res.json(produtores);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar o Produtor" });
    }
};

//Criar Produtor
export const createProdutor = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            produtorId,
            nome,
            cpf,
            cnpj,
            nomeFazenda,
            cidade,
            estado,
            areaTotal,
            areaAgricultavel,
            areaVegetacao,
            culturas,
            createdAt,
            updatedAt
        } = req.body;

        // Verificação básica de campos obrigatórios
        if (!produtorId || !nome || !nomeFazenda || !cidade || !estado || !areaTotal || !areaAgricultavel || !areaVegetacao || !culturas) {
            res.status(400).json({ message: "Campos obrigatórios estão faltando." });
            return;
        }

        // Conversão de strings para números, se necessário
        const parsedAreaTotal = parseFloat(areaTotal);
        const parsedAreaAgricultavel = parseFloat(areaAgricultavel);
        const parsedAreaVegetacao = parseFloat(areaVegetacao);

        // Verifique se as conversões deram certo
        if (isNaN(parsedAreaTotal) || isNaN(parsedAreaAgricultavel) || isNaN(parsedAreaVegetacao)) {
            res.status(400).json({ message: "Áreas devem ser números válidos." });
            return;
        }

        const produtores = await prisma.produtores.create({
            data: {
                produtorId,
                nome,
                cpf,
                cnpj,
                nomeFazenda,
                cidade,
                estado,
                areaTotal: parsedAreaTotal,
                areaAgricultavel: parsedAreaAgricultavel,
                areaVegetacao: parsedAreaVegetacao,
                culturas,
                createdAt: createdAt ? new Date(createdAt) : undefined,
                updatedAt: updatedAt ? new Date(updatedAt) : undefined,
            },
        });
        
        res.status(201).json(produtores);
    } catch (error) {
        console.error(error); // Logar o erro para depuração
        res.status(500).json({ message: "Error ao criar o Produtor" });
    }
};

//Deletar Produtor
export const deleteProdutor = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { produtorId } = req.params;

        if (!produtorId) {
            res.status(400).json({ message: "ID do produtor não fornecido." });
            return;
        }

        await prisma.produtores.delete({
            where: {
                produtorId: produtorId,
            },
        });

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao deletar o Produtor" });
    }
};

// Editar Produtor
export const updateProdutor = async (req: Request, res: Response): Promise<void> => {
    try {
        const { produtorId } = req.params;
        const {
            nome,
            cpf,
            cnpj,
            nomeFazenda,
            cidade,
            estado,
            areaTotal,
            areaAgricultavel,
            areaVegetacao,
            culturas
        } = req.body;

        if (!nome || !nomeFazenda || !cidade || !estado || !areaTotal || !areaAgricultavel || !areaVegetacao || !culturas) {
            res.status(400).json({ message: "Campos obrigatórios estão faltando." });
            return;
        }

        const parsedAreaTotal = parseFloat(areaTotal);
        const parsedAreaAgricultavel = parseFloat(areaAgricultavel);
        const parsedAreaVegetacao = parseFloat(areaVegetacao);

        if (isNaN(parsedAreaTotal) || isNaN(parsedAreaAgricultavel) || isNaN(parsedAreaVegetacao)) {
            res.status(400).json({ message: "Áreas devem ser números válidos." });
            return;
        }

        const produtor = await prisma.produtores.update({
            where: { produtorId },
            data: {
                nome,
                cpf,
                cnpj,
                nomeFazenda,
                cidade,
                estado,
                areaTotal: parsedAreaTotal,
                areaAgricultavel: parsedAreaAgricultavel,
                areaVegetacao: parsedAreaVegetacao,
                culturas,
            },
        });

        res.status(200).json(produtor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao atualizar o Produtor" });
    }
};
