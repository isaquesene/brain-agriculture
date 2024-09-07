import { Router } from "express";
import { createProdutor, getProdutores, updateProdutor, deleteProdutor  } from "../controllers/produtoresController";

const router = Router();

router.get("/", getProdutores);
router.post("/", createProdutor);
router.delete('/:produtorId', deleteProdutor);
router.put('/:produtorId', updateProdutor);

export default router;