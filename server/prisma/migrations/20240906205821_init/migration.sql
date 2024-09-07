-- CreateTable
CREATE TABLE "Users" (
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Produtores" (
    "produtorId" TEXT NOT NULL,
    "cpf" TEXT,
    "cnpj" TEXT,
    "nome" TEXT NOT NULL,
    "nomeFazenda" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "areaTotal" DOUBLE PRECISION NOT NULL,
    "areaAgricultavel" DOUBLE PRECISION NOT NULL,
    "areaVegetacao" DOUBLE PRECISION NOT NULL,
    "culturas" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produtores_pkey" PRIMARY KEY ("produtorId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produtores_cpf_key" ON "Produtores"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Produtores_cnpj_key" ON "Produtores"("cnpj");
