# LAIVY — Frontend em React

Interface em React do **LAIVY**, sistema de gerenciamento de times. Ela conversa com o backend do projeto (Spring Boot) e permite login com o Google.

> Branch da atividade de React: `ativ_react`

## Tecnologias

- React 19 + Vite
- React Router (rotas das telas)
- Firebase Authentication (login com o Google)
- Backend LAIVY (Spring Boot), acessado pelo proxy `/api` do Vite

## Como rodar

1. Suba o backend do LAIVY na porta **8080** (veja o repositório `laivy`).
2. Instale as dependências e rode o frontend:

```bash
npm install
npm run dev
```

3. Acesse http://localhost:5173

O `vite.config.js` envia tudo que começa com `/api` para `http://localhost:8080`.

## Estrutura de pastas

```
src/
├── assets/      imagens (logo do LAIVY e do Google)
├── components/  peças reutilizáveis (Botao, Campo, Layout, CardExame, ErroBoundary...)
├── hooks/       lógica e estado das telas (useUsuario, useExames, useDashboard...)
├── pages/       uma tela por arquivo (Login, Home, Exames, Dashboard...)
├── services/    chamadas ao backend e ao Firebase (api.js centraliza o fetch)
├── styles/      CSS global
└── utils/       funções auxiliares (formatar datas)
```

Cada camada tem uma responsabilidade:
**page** monta a tela → **hook** guarda o estado e chama o service → **service** fala com o backend.

## Entregas

| Entrega | O que foi feito | Arquivos principais |
|---|---|---|
| 1 | Tela de login com o Google, tela inicial e estrutura de pastas | `pages/Login.jsx`, `services/firebase.js`, `pages/Home.jsx` |
| 2 | Login e Início integrados ao backend; funcionalidade principal: **Exames** (listar, cadastrar, excluir) | `services/usuarioService.js`, `hooks/useExames.js`, `pages/Exames.jsx` |
| 3 | Área administrativa: dashboard do atleta (cliente) e do administrador/treinador, com as últimas ações registradas no sistema | `pages/Dashboard*.jsx`, `hooks/useDashboard*.js`, `services/auditoriaService.js` |
| Final | Interface completa, integrada ao backend, com login pelo Google | — |

O relatório de alterações está em [RELATORIO_ALTERACOES.md](RELATORIO_ALTERACOES.md).

## Perfis

| Tipo | Perfil | O que vê |
|---|---|---|
| 1 | Administrador | Dashboard completo + últimas ações (auditoria); cadastra e exclui exames |
| 2 | Treinador | Dashboard sem auditoria; cadastra e exclui exames |
| 3 | Atleta | Dashboard próprio (exames, avaliações, atividades); só consulta exames |
| 0 | Login Google | Tela inicial com nome e foto; sem perfil no backend |

## Tratamento de erros

- `services/api.js` transforma qualquer falha (sem internet, erro 500, 401/403, erro sem JSON) em uma mensagem legível.
- Os hooks usam `try/catch` e devolvem `erro`, que as telas exibem em vez de travar.
- Os formulários mantêm o que o usuário digitou quando o backend recusa.
- `components/ErroBoundary.jsx` pega erros de renderização e mostra um aviso, em vez de deixar a tela em branco.

## Divisão da apresentação (4 pessoas)

1. **Estrutura + login com Google:** pastas, rotas (`App.jsx`), `Login`, `firebase.js`, `useUsuario`, `TrocarSenha`
2. **Tela inicial + componentes:** `Home`, `Layout`, componentes reutilizáveis, estilos, `api.js` (erros centralizados)
3. **Funcionalidade principal (Exames):** `Exames`, `useExames`, `exameService`, `FormExame`, `CardExame`, com demonstração ao vivo
4. **Área administrativa:** `Dashboard`, `DashboardAdmin`, `DashboardAtleta`, auditoria e relatório de alterações; fechamento
