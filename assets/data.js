/*
 * CONFIGURAÇÃO DO CALENDÁRIO EDITORIAL
 * ------------------------------------
 * Pra adaptar este modelo a um cliente novo:
 *   1. Troque os valores de "client" e "period".
 *   2. Troque "accent" pela cor da marca do cliente.
 *   3. Preencha "pillars" com as linhas editoriais do mês.
 *   4. Preencha "posts" com os posts reais (datas, legendas, imagens).
 *      Troque as imagens em /images pelas artes reais do cliente.
 * Nada no style.css ou script.js precisa mudar — eles só leem este arquivo.
 */

const CALENDAR_DATA = {
  client: {
    name: "Nome do Cliente",
    shortName: "NC",
    tagline: "Frase de posicionamento da marca · Cidade",
    accent: "#2B5CA0"
  },

  period: {
    label: "Outubro 2026",
    start: "2026-10-01",
    end: "2026-10-31",
    headline: "Conteúdo com propósito.",
    intro: "Este é um calendário editorial de exemplo — a estrutura que você está vendo (feed, linha editorial, calendário clicável, resumo) é reaproveitável para qualquer cliente. Troque os dados deste arquivo e as imagens da pasta /images pelos reais."
  },

  pillars: [
    { name: "Pilar A", desc: "Descrição curta do que esse pilar aborda e por que ele existe no planejamento." },
    { name: "Pilar B", desc: "Descrição curta do que esse pilar aborda e por que ele existe no planejamento." },
    { name: "Pilar C", desc: "Descrição curta do que esse pilar aborda e por que ele existe no planejamento." },
    { name: "Pilar D", desc: "Descrição curta do que esse pilar aborda e por que ele existe no planejamento." }
  ],

  posts: [
    { id: 1, date: "2026-10-09", type: "card",  status: "published", pillar: "Pilar A", title: "Exemplo de card 1", caption: "Legenda de exemplo para este post — aqui entra o texto real que vai junto com a arte na publicação.", image: "images/post-01.svg" },
    { id: 2, date: "2026-10-15", type: "card",  status: "approved",  pillar: "Pilar B", title: "Exemplo de card 2", caption: "Legenda de exemplo para este post — aqui entra o texto real que vai junto com a arte na publicação.", image: "images/post-02.svg" },
    { id: 3, date: "2026-10-18", type: "card",  status: "approved",  pillar: "Pilar C", title: "Exemplo de card 3", caption: "Legenda de exemplo para este post — aqui entra o texto real que vai junto com a arte na publicação.", image: "images/post-03.svg" },
    { id: 4, date: "2026-10-20", type: "card",  status: "approved",  pillar: "Pilar B", title: "Exemplo de card 4", caption: "Legenda de exemplo para este post — aqui entra o texto real que vai junto com a arte na publicação.", image: "images/post-04.svg" },
    { id: 5, date: "2026-10-22", type: "card",  status: "approved",  pillar: "Pilar D", title: "Exemplo de card 5", caption: "Legenda de exemplo para este post — aqui entra o texto real que vai junto com a arte na publicação.", image: "images/post-05.svg" },
    { id: 6, date: "2026-10-27", type: "video", status: "script",    pillar: "Pilar A", title: "Exemplo de vídeo 1", caption: "Roteiro de exemplo — aqui entra o roteiro aprovado, ainda pendente de produção/gravação.", image: "images/post-06.svg" },
    { id: 7, date: "2026-10-29", type: "video", status: "script",    pillar: "Pilar A", title: "Exemplo de vídeo 2", caption: "Roteiro de exemplo — aqui entra o roteiro aprovado, ainda pendente de produção/gravação.", image: "images/post-07.svg" }
  ],

  nextPublication: "2026-10-15",
  priorityDays: "Terças e quintas-feiras",
  production: "Cafecomigor"
};
