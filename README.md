# Brain Agriculture - Sistema de gestão de Produtores Rurais

<div class="filament-hidden">

![7](https://github.com/user-attachments/assets/ef228f6f-1124-4db2-a5a2-0c7ce50891e0)

</div> 

## Configurações

- ReactJs
- TypeScript
- API TS
- Node
- Redux
- PostgreSql | PgAdmin 
- Prisma 
- Cursor IDE
- Postman

## Frontend

- Next.Js
- Nextjs and Context Providers
- Recharts 
- MUI | DataGrid
- Tailwind

## Instalação

### Clonar o projeto do repositório:
```bash
https://github.com/isaquesene/brain-agriculture.git
```

### Instale o Postgre:

Se não tiver o Postgre instalado na sua máquina, entre no [site oficial do Postgre](https://www.postgresql.org/download/) e realize a instalação.

Após a instalação crie um server no postgresql:

![postgress](https://github.com/user-attachments/assets/c07a6a7b-968a-4feb-b7b3-0dc992246931)

conexão:

![imagem_2024-09-07_202132723](https://github.com/user-attachments/assets/9ac6b456-5fe6-4337-bcfb-7473f10b46a3)

### Se a sua máquina não tiver Node.js instalado, rode:
```bash
npm install
```

### Configurações do .nev do diretorio server para se conectar ao server do postgre:

```bash
PORT=8000
DATABASE_URL="postgresql://postgres:password01@localhost:5432/brain_agro_db?schema=public"
```

### Execute a migrate para alimentar seu banco:

```bash
npm run seed
```

Esse é o json com os dados que vão aliemntar o banco:

```bash
[
    {
      "produtorId": "5c1121d7-20c8-4890-81c0-949bd60523a3",
      "cpf": "123.456.789-00",
      "cnpj": null,
      "nome": "João da Silva",
      "nomeFazenda": "Fazenda Boa Vista",
      "cidade": "Goiânia",
      "estado": "GO",
      "areaTotal": 1500.75,
      "areaAgricultavel": 1000.50,
      "areaVegetacao": 500.25,
      "culturas": ["Soja", "Milho"],
      "createdAt": "2022-08-27T18:35:57Z",
      "updatedAt": "2022-09-05T12:12:45Z"
    }
]
```
As consfigurações das tabelas estão no arquivo do **schema.prisma**

### Execute o comando para rodar o ambiente de desenvolvimento:

Essa será a visualização das pastas:

```env
Length Name
----
.next
node_modules
server
src
.env.local
.eslintrc.json
.gitignore
next-env.d.ts
next.config.mjs
package-lock.json
package.json
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
```

Abra o terminal da sua IDE e separe desta maneira, em uma aba entre no diretorio server **cd ./server/**:

![imagem_2024-09-07_203131592](https://github.com/user-attachments/assets/6c0a5c0f-1c84-40a0-a651-17342b024722)

### Execute nos dois
```bash
npm run dev
```

Após executar o **npm run dev** no local e no diretorio server o projeto será iniciado:

![themaLight](https://github.com/user-attachments/assets/02e790a3-b3b4-4a08-bcc5-3fa1ce32b346)