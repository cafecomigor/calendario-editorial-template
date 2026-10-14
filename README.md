# calendario-editorial-template

Modelo reaproveitável de calendário editorial interativo, no estilo do que a
Eye Consult fez pra IMOF. Veja o exemplo ao vivo:
https://cafecomigor.github.io/calendario-editorial-template/

## Como usar para um cliente novo

1. Copie os arquivos `index.html`, `assets/` e `images/` pra dentro do
   repositório do cliente (ex: `imof-repo/calendario-editorial/outubro-2026/`).
2. Abra `assets/data.js` e preencha:
   - `client` — nome, sigla (pra logo redondo) e a cor da marca (`accent`).
   - `period` — mês, datas de início/fim, título de destaque e texto de
     introdução.
   - `pillars` — as linhas editoriais do mês.
   - `posts` — um item por post: data, tipo (`card` ou `video`), status
     (`published`, `approved` ou `script`), pilar, título, legenda e a(s)
     imagem(ns). Post de imagem única usa `image: "caminho.jpg"`; post em
     formato carrossel usa `images: ["caminho-1.jpg", "caminho-2.jpg", ...]`
     — a página detecta sozinha e mostra o seletor de fotos no modal.
3. Troque os arquivos de `images/` pelas artes reais (mesmo nome ou ajuste o
   campo `image` de cada post em `data.js`).
4. Não precisa mexer em `style.css` nem `script.js` — eles só leem o
   `data.js`. Pra mudar a cor, basta trocar `client.accent`.

## O que a página já faz

- Prévia do feed (grid estilo Instagram, mais recente primeiro).
- Linha editorial organizada por pilar, com os posts de cada um.
- Calendário clicável com filtro (todos / cards / vídeos), com selo de
  carrossel nos posts de várias fotos.
- Modal de cada post com a arte (ou roteiro), legenda completa e botão de
  download — individual ou em lote (.zip, só das artes aprovadas).
- Resumo com contagem de publicados, aprovados, vídeos pendentes e próxima
  data de publicação.

Tudo isso é gerado a partir do `assets/data.js` — a estrutura da página não
muda de cliente pra cliente, só os dados.
