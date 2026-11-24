# Relatório de alterações — Frontend React LAIVY

## Entrega 1 — Login com Google, tela inicial e estrutura

- Projeto criado com Vite + React e organizado em `assets`, `components`, `hooks`, `pages`, `services`, `styles` e `utils`.
- Tela de **Login** com usuário, senha e perfil, e botão **Entrar com Google** (Firebase Authentication).
- **Tela inicial** (`Home`) mostrando nome e foto do usuário e um resumo dos exames.
- Componentes reutilizáveis: `Botao`, `Campo`, `Selecao`, `Logo`, `Layout` (menu lateral), `CardInfo`.

## Entrega 2 — Integração com o backend e funcionalidade principal

- `services/api.js`: uma função `requisicao` única para falar com o backend, que envia o cookie de sessão.
- Login integrado ao endpoint `POST /usuarios/login`; troca de senha obrigatória no primeiro acesso (`TrocarSenha`).
- Funcionalidade principal, **Exames**: listar (`GET /exames`), cadastrar (`POST /exames`) e excluir (`DELETE /exames/{id}`).
- O atleta só consulta os exames; administrador e treinador podem cadastrar e excluir.
- Login com o Google sem guardar dados no `localStorage` (sessão só em memória).

## Entrega 3 — Área administrativa

- `Dashboard` escolhe a tela de acordo com o perfil:
  - **Dashboard do atleta (cliente):** meus exames, minhas avaliações (`/desempenhos/usuario/{id}`) e próximas atividades.
  - **Dashboard do administrador/treinador:** totais de usuários, atletas, times, exames e exames inaptos, além das próximas atividades.
  - **Últimas ações no sistema** (`/auditoria`), visíveis só para o administrador.

## Ajustes finais — tratamento de erros

- `api.js` agora trata falta de conexão, respostas 401/403 e erros sem corpo JSON, sempre com uma mensagem amigável.
- `useExames` passou a capturar erros ao carregar e excluir, e as telas **Início** e **Exames** exibem a mensagem.
- `FormExame` trata o erro ao buscar a lista de atletas.
- `CardExame` e `utils/datas.js` não quebram mais com dados faltando (atleta ou data ausentes).
- Novo `ErroBoundary` em volta do app: um erro de renderização mostra um aviso com o botão "Voltar ao início", em vez de deixar a tela em branco.
- README com instruções de uso, estrutura, perfis e divisão da apresentação.
- Com senha errada, o login mostra a mensagem do backend ("Login, senha ou perfil incorretos.").

## Entrega final — login com Google integrado ao backend

- Backend: novo endpoint `POST /usuarios/login-google`, que valida o ID token do Firebase (assinatura, emissor, projeto e e-mail verificado) e faz login do usuário com o mesmo e-mail.
- Front: depois do popup do Google, envia o token ao backend e entra com o perfil real do usuário (admin, treinador ou atleta).
- E-mail não cadastrado ou token inválido: mensagem clara na tela de login, sem travar.
