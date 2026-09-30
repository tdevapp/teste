# Plano de implementação — Vira Lata Vira Amor

## Resultado

Uma landing page institucional e comercial, em português do Brasil, para converter buscas locais e visitantes do Instagram em contatos por WhatsApp, agendamento e rotas.

## Arquitetura

- **Frontend:** React + Vite, uma rota pública `/` com HTML de conteúdo completo no primeiro carregamento.
- **Componentes:** `src/App.jsx` concentra a composição semântica; `src/styles.css` contém tokens e responsividade; `src/data.js` mantém serviços e especialidades fáceis de editar.
- **Assets:** `public/assets/` para fotografia e logo; imagens usam `loading="lazy"` fora do hero e dimensões reservadas.
- **SEO:** título, descrição, Open Graph, dados estruturados LocalBusiness/VeterinaryCare, `sitemap.xml`, `robots.txt` e `manus-routes.json`.

## Direção

Composição editorial orgânica e vibrante, sustentada por azul/turquesa/branco com amarelo como acento de ação. Hero fotográfico, serviços sem repetição de cards, especialidades em grade leve, galeria mosaico e CTA de contato recorrente.

## Serving e cache

A página é conteúdo estático, então a publicação deve gerar arquivos estáticos. Assets versionados podem receber cache longo; HTML permanece revalidável. Não há API, autenticação, dados privados ou necessidade de servidor/banco.

## Conteúdo e comportamento

Header ancora para as seções; WhatsApp abre conversa com mensagem automática; Instagram e Maps apontam para URLs fornecidas. O menu mobile abre/fecha com botão acessível. Especialidades permanecem em grid no desktop e tornam-se lista horizontal rolável com snap no mobile, sem criar rolagem horizontal na página.

## Performance e acessibilidade

Usar apenas React, CSS e uma biblioteca de ícones leve. Imagem hero com `fetchpriority="high"`; demais imagens lazy. Contraste mínimo AA, foco visível, labels acessíveis, `prefers-reduced-motion`, sem emoji como ícones e sem dependência de hover.

## Verificação

Executar instalação, lint/build se disponíveis, checar `/manus-routes.json` no servidor, validar links/metadata por inspeção de fonte e fazer uma rodada de screenshots desktop/mobile após o servidor estar pronto para detectar overflow e hierarquia quebrada.
