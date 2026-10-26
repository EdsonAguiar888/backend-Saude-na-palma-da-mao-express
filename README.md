# 🩺 API Backend, Saúde na Palma da Mão

<p align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-blue" alt="Status do Projeto">
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/TypeORM-FE0803?style=flat&logo=typeorm&logoColor=white" alt="TypeORM">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</p>

Repositório oficial do **Back-end (API REST)** da aplicação **Saúde na Palma da Mão**, desenvolvido como artefato do Projeto Integrador do 3º período do curso de Análise e Desenvolvimento de Sistemas da **Faculdade Senac Pernambuco**.

 **Link do projeto:** https://backend-saude-na-palma-da-mao-express.onrender.com/api/v1

 **Link documentação do projeto:** https://backend-saude-na-palma-da-mao-express.onrender.com/api/v1/docs/

---

## 🎯 Sobre o Projeto

O projeto **Saúde na Palma da Mão** é uma plataforma digital voltada a reduzir barreiras de acesso aos serviços de saúde e facilitar o agendamento de consultas, especialmente para pessoas idosas e seus cuidadores.

A API é desenvolvida com **Express.js e TypeScript**, atuando como camada de comunicação entre o banco de dados e os clientes da aplicação.

O sistema oferece suporte ao gerenciamento de usuários, clínicas parceiras, profissionais de saúde, disponibilidade de horários e agendamentos, com foco inicial nas especialidades de **Ortopedia e Fisioterapia**.

A arquitetura permite a integração com o frontend Web desenvolvido em Angular e com uma futura aplicação mobile desenvolvida em React Native.

---

## 🛠️ Tecnologias Utilizadas

O backend utiliza ferramentas amplamente adotadas no ecossistema Node.js para organizar as rotas, implementar regras de negócio, acessar o banco de dados e facilitar a manutenção da aplicação.

- **[Node.js](https://nodejs.org/)**. Ambiente de execução JavaScript para o servidor.
- **[Express.js](https://expressjs.com/)**. Framework para criação de APIs HTTP e gerenciamento de rotas e middlewares.
- **[TypeScript](https://www.typescriptlang.org/)**. Superset JavaScript que adiciona tipagem estática ao código.
- **[PostgreSQL](https://www.postgresql.org/)**. Sistema gerenciador de banco de dados relacional.
- **[TypeORM](https://typeorm.io/)**. ORM utilizado para mapear entidades e realizar operações no banco de dados por meio de código TypeScript, sem a necessidade de escrever manualmente comandos SQL para as operações comuns.
- **[Docker](https://www.docker.com/)**. Plataforma de conteinerização para padronizar o ambiente de desenvolvimento e executar o banco de dados.
- **[API REST](https://developer.mozilla.org/en-US/docs/Glossary/REST)**. Estilo arquitetural para comunicação entre o backend e os clientes por meio de requisições HTTP e respostas JSON.
- **[JWT](https://jwt.io/)**. Tecnologia para implementação de tokens de autenticação, caso adotada no módulo de segurança.
- **[bcrypt](https://github.com/kelektiv/node.bcrypt.js)**. Biblioteca para geração e verificação de hashes de senhas.

---

## 🏗️ Arquitetura do Backend

A aplicação segue uma arquitetura organizada em camadas, separando as responsabilidades para facilitar a manutenção e a evolução do sistema.

```text
backend-saude-na-palma-mao-api/
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── entities/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── middlewares/
│   ├── dtos/
│   ├── app.ts
│   └── server.ts
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

### Responsabilidades das camadas

- **Routes**. Define os endpoints da API e encaminha as requisições para os controllers.
- **Controllers**. Recebe as requisições HTTP, valida os dados de entrada e organiza as respostas.
- **Services**. Implementa as regras de negócio, como verificar disponibilidade e impedir conflitos de agendamento.
- **Entities**. Representa as tabelas e os relacionamentos do PostgreSQL por meio do TypeORM.
- **Middlewares**. Implementa funcionalidades compartilhadas, como autenticação, autorização e tratamento de erros.
- **DTOs**. Define os formatos esperados para os dados recebidos pela API.
- **Config**. Centraliza a configuração de conexão com o banco de dados.
- **app.ts**. Configura o Express, os middlewares e as rotas.
- **server.ts**. Inicializa a conexão com o banco e inicia o servidor HTTP.

A estrutura apresentada é uma proposta de organização. Os arquivos e módulos definitivos serão implementados conforme a evolução do projeto.

---

## 👥 Equipe de Desenvolvimento

- Danilo Henrique
- Edson Aguiar
- Estevão Enoque
- Evencio Neto
- Igor Barbosa
- José Paulo Coutinho
- Mayara M. da Silva

**Docente Responsável:** Prof. Dr. Geraldo Gomes da Cruz Júnior

**Professora de UX:** Profa. Ms. Samantha Pimentel

---

## 📋 Requisitos do Sistema, MVP da 1ª Entrega

Conforme a Especificação de Requisitos de Software (SRS), a API contempla os seguintes módulos principais.

1. **Autenticação e Usuários (RF-001, RF-002).** Cadastro seguro com hash de senha e controle de acesso baseado nos perfis Paciente, Profissional e Administrador.

2. **Clínicas e Especialidades (RF-003, RF-004).** Gerenciamento das clínicas parceiras e catálogo de especialidades, inicialmente limitado a Ortopedia e Fisioterapia.

3. **Profissionais de Saúde (RF-005).** Cadastro de profissionais vinculado aos respectivos conselhos profissionais, como CRM e CREFITO, e às clínicas parceiras.

4. **Disponibilidade e Agendamentos (RF-006, RF-007, RF-008, RF-009).** Gerenciamento de horários disponíveis, agendamento de consultas, histórico e cancelamentos.

5. **Painel Administrativo (RF-010).** Área restrita para gerenciamento dos cadastros e manutenção das informações do sistema.

---

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/), versão LTS compatível com as dependências do projeto.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/), com Docker Compose.
- npm, instalado junto com o Node.js.
- Git, para clonar o repositório.

### 1. Clone o repositório

```bash
git clone https://github.com/EdsonAguiar888/backend-Saude-na-palma-da-mao-express

cd backend-saude-na-palma-mao-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`.

Exemplo de configuração para desenvolvimento local:

```env
PORT=3000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=sua_senha
DB_DATABASE=saude_na_palma_mao

JWT_SECRET=altere_para_uma_chave_segura
```

**Importante:** os nomes das variáveis devem corresponder aos utilizados na implementação da conexão com o PostgreSQL e na configuração da autenticação. Não publique credenciais reais no repositório.

### 4. Inicie o PostgreSQL com Docker

Com o arquivo `docker-compose.yml` configurado, execute:

```bash
docker compose up -d
```

Para verificar se o container está em execução:

```bash
docker compose ps
```

O banco de dados deverá estar disponível na porta configurada, normalmente `5432` no ambiente local.

### 5. Execute as migrations

Caso o projeto utilize migrations do TypeORM, execute o script configurado no `package.json` para criar ou atualizar as tabelas.

Exemplo de comando, caso esse script tenha sido configurado:

```bash
npm run migration:run
```

As migrations devem ser implementadas antes da execução desse comando. Em ambientes de produção, prefira migrations versionadas em vez de depender da sincronização automática das entidades.

### 6. Inicie a API

Em modo de desenvolvimento, com recarga automática habilitada:

```bash
npm run dev
```

O comando depende da configuração do `package.json`. Uma alternativa comum é utilizar `tsx` ou `ts-node-dev` para executar TypeScript durante o desenvolvimento.

Após a inicialização, a API estará disponível em:

```text
http://localhost:3000
```

A porta poderá ser alterada pela variável de ambiente `PORT`.

---

## 🧪 Testes

Os testes devem validar as regras de negócio, as rotas HTTP e a integração com o banco de dados.

Os comandos abaixo são exemplos de scripts que poderão ser configurados no `package.json`.

```bash
# Testes unitários
npm test

# Testes em modo de observação
npm run test:watch

# Cobertura de testes
npm run test:cov
```

A execução desses comandos depende da instalação e configuração de uma ferramenta de testes, como [Jest](https://jestjs.io/) ou [Vitest](https://vitest.dev/).

---

## 🔐 Segurança

A API deverá implementar medidas de segurança compatíveis com o tratamento de informações relacionadas à saúde.

- Armazenamento de senhas utilizando hash seguro, como bcrypt.
- Autenticação por token, caso seja adotado JWT.
- Autorização por perfil de usuário.
- Validação dos dados recebidos nas requisições.
- Tratamento centralizado de erros.
- Uso de variáveis de ambiente para credenciais e segredos.
- Proteção contra acesso não autorizado a dados pessoais e informações de agendamento.
- Configuração adequada de CORS para permitir o acesso dos clientes autorizados.
- Uso de HTTPS no ambiente de produção.
- Controle de acesso e proteção dos dados pessoais conforme a legislação aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais (LGPD).

Referência oficial: [Lei nº 13.709/2018, Lei Geral de Proteção de Dados Pessoais](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm).

---

## 🚀 Deploy

A aplicação poderá ser implantada em uma plataforma de hospedagem que ofereça suporte a Node.js, como [Render](https://render.com/).

A arquitetura de produção será composta por:

- **Frontend:** aplicação Angular hospedada separadamente.
- **Backend:** API Express.js executada como serviço Web.
- **Banco de dados:** PostgreSQL hospedado em serviço gerenciado ou em infraestrutura própria.
- **ORM:** TypeORM para mapeamento das entidades, relacionamentos e operações de persistência.

As credenciais do banco de dados deverão ser configuradas nas variáveis de ambiente do serviço de hospedagem. Em produção, o acesso ao banco deve ser restrito à infraestrutura autorizada, com uso de conexões seguras quando suportadas pelo provedor.

Documentação oficial: [Deploy de aplicações Node.js no Render](https://render.com/docs/deploy-node-express-app) e [PostgreSQL no Render](https://render.com/docs/databases).

---

## 📅 Cronograma de Entregas Acadêmicas

**1ª Entrega, 14/10/2026.** MVP Web, composto pelo frontend Angular, API Express.js e banco de dados PostgreSQL executado em ambiente conteinerizado via Docker.

**2ª Entrega, 09/12/2026.** Aplicação mobile desenvolvida em React Native, integrada à API e com recursos de Inteligência Artificial para pré-triagem, conforme o escopo definido pelo projeto.

---

## 📄 Licença

Este projeto é desenvolvido para fins acadêmicos no âmbito da Faculdade Senac Pernambuco.

O repositório apresenta uma licença MIT nos indicadores visuais. A adoção efetiva dessa licença depende da inclusão e publicação de um arquivo `LICENSE` com os termos correspondentes.
