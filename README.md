# 🐾 Lar Temporário

Aplicação web responsiva desenvolvida com o objetivo de facilitar a conexão entre pessoas ou instituições que resgatam animais e lares temporários disponíveis para acolhimento.

O sistema permite o cadastro de lares temporários, visualização e filtragem de lares próximos com base na geolocalização do usuário, além de autenticação segura e gerenciamento de imagens.

---

## 🌐 Deploy
A aplicação está disponível em produção no link abaixo:

👉 https://lartemporario.netlify.app

---

## 🔐 Acesso à aplicação

Para acessar as funcionalidades da aplicação é necessário realizar login com uma conta Google.

Essa decisão foi tomada para:
- Garantir controle de acesso aos dados cadastrados
- Proteger informações sensíveis dos perfis de lares
- Associar corretamente os dados aos usuários autenticados

---

## 🚀 Funcionalidades

- Autenticação de usuários via Google utilizando Firebase Authentication
- Cadastro, edição e exclusão de perfis de lares temporários
- Upload e gerenciamento de imagens dos perfis utilizando Firebase Storage
- Listagem e filtragem de lares com base em:
  - Geolocalização do usuário
  - Tipo de animal aceito
  - Tempo de acolhimento
  - Necessidade de auxílio com despesas
  - Presença de outros animais no lar
- Controle de acesso utilizando Firebase Security Rules
- Interface responsiva seguindo abordagem mobile first

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React
- JavaScript
- HTML5 e CSS3
- Bootstrap / React-Bootstrap
- Context API
- Formik

### Backend (BaaS)
- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Firebase Security Rules

### Outros
- API de Geolocalização do navegador
- GeoFire (consulta por proximidade geográfica)
- Netlify (deploy do frontend)

---

## 🏗️ Arquitetura

A aplicação segue o modelo **cliente-servidor**, onde:
- O frontend é uma Single Page Application (SPA) desenvolvida em React
- O backend utiliza o modelo **Backend as a Service (BaaS)** com Firebase, responsável por autenticação, persistência de dados, armazenamento de arquivos e regras de segurança

---

## ▶️ Como executar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/DanielleVieira/lt-web.git

# Acesse a pasta do projeto
cd lt-web

# Instale as dependências
npm install

# Execute a aplicação
npm start
```

⚠️ Para funcionamento completo, é necessário configurar um projeto no Firebase e adicionar as variáveis de ambiente no projeto.

---

## 📌 Observações

Este projeto foi desenvolvido com fins acadêmicos e de aprendizado, com foco em boas práticas de desenvolvimento frontend, integração com serviços em nuvem e organização de código.

---

## 👩‍💻 Autora

Danielle de Lima Vieira

🔗 GitHub: https://github.com/DanielleVieira

🔗 LinkedIn: https://linkedin.com/in/daniellelimavieira
