"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProdutor = exports.deleteProdutor = exports.createProdutor = exports.getProdutores = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//Buscar Produtor
const getProdutores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const search = (_a = req.query.search) === null || _a === void 0 ? void 0 : _a.toString();
        const produtores = yield prisma.produtores.findMany({
            where: {
                nome: {
                    contains: search,
                },
            },
        });
        res.json(produtores);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao buscar o Produtor" });
    }
});
exports.getProdutores = getProdutores;
//Criar Produtor
const createProdutor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { produtorId, nome, cpf, cnpj, nomeFazenda, cidade, estado, areaTotal, areaAgricultavel, areaVegetacao, culturas, createdAt, updatedAt } = req.body;
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
        const produtores = yield prisma.produtores.create({
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
    }
    catch (error) {
        console.error(error); // Logar o erro para depuração
        res.status(500).json({ message: "Error ao criar o Produtor" });
    }
});
exports.createProdutor = createProdutor;
//Deletar Produtor
const deleteProdutor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { produtorId } = req.params;
        if (!produtorId) {
            res.status(400).json({ message: "ID do produtor não fornecido." });
            return;
        }
        yield prisma.produtores.delete({
            where: {
                produtorId: produtorId,
            },
        });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao deletar o Produtor" });
    }
});
exports.deleteProdutor = deleteProdutor;
// Editar Produtor
const updateProdutor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { produtorId } = req.params;
        const { nome, cpf, cnpj, nomeFazenda, cidade, estado, areaTotal, areaAgricultavel, areaVegetacao, culturas } = req.body;
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
        const produtor = yield prisma.produtores.update({
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao atualizar o Produtor" });
    }
});
exports.updateProdutor = updateProdutor;
