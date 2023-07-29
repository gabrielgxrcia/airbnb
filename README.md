# Airbnb com Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023

### Features

- Design com TailwindCSS
- Interface responsiva e animada com Tailwind
- Autenticação de usuários por credenciais, Google e Github
- Upload de imagens usando Cloudinary CDN
- Validação e manipulação de formulários no lado do cliente com react-hook-form
- Tratamento de erros do servidor usando react-toast
- Calendários com react-date-range
- Tratamento de estado de carregamento e estado vazio da página
- Sistema de reserva e agendamento
- Cancelamento de reserva por hóspedes e proprietários
- Criação e exclusão de propriedades
- Cálculo de preços
- Algoritmo de busca avançada por categoria, período de datas, localização no mapa, número de hóspedes, quartos e banheiros
- Sistema de favoritos
- Filtros com URL compartilhável para facilitar o compartilhamento dos resultados da busca
- Manipulação de rotas POST e DELETE (app/api)
- Busca de dados em componentes React do lado do servidor diretamente no banco de dados (sem API)
- Tratamento de novos arquivos de template do Next 13, como error.tsx e loading.tsx, para tratamento unificado de erros e carregamento
- Gerenciamento de relações entre componentes do servidor e filhos

### Funcionamento

```shell
git clone https://github.com/gabrielgxrcia/airbnb.git
```

### Instalando os pacotes

```shell
npm install
```

### Configurando o arquivo .env

```shell
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Configurando o Prisma

```shell
npx prisma generate
npx prisma db push
```

## Agradecimentos

- [ShadcnUI](https://ui.shadcn.com/)

## Feedback

Se você tiver algum comentário, entre em contato comigo em gabrielgrazeffi12@gmail.com

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
