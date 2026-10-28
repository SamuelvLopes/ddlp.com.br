# ddlp.com.br

Landing page da **DDLP — Design Digital, Leads e Performance**.

Site estático (HTML, CSS e JavaScript puros), sem build. Para rodar localmente:

```bash
python3 -m http.server 8080
```

## Identidade

| Cor | Hex | Uso |
| --- | --- | --- |
| Creme | `#FFF4E2` | Fundo |
| Tinta | `#1A1614` | Texto, bordas, faixas escuras |
| Coral | `#FF5A3C` | Ação principal e destaque |
| Azul | `#A9C2FF` | Design |
| Amarelo | `#FFD95C` | Leads |
| Menta | `#AEEBCB` | Performance |

Tipografia: Bricolage Grotesque 800 (títulos e marca), Inter (textos), IBM Plex Mono (rótulos e dados).

## CSS mobile first

Os estilos base são para celular. Tablet e desktop entram com `min-width: 720px` e `min-width: 1040px` no fim do `styles.css`.

## SEO, AEO e GEO

- Todo o conteúdo em português está no HTML, legível sem JavaScript.
- Dados estruturados (JSON-LD) no `<head>`: `ProfessionalService`, `WebSite`, `WebPage` e `FAQPage`. Ao mudar o FAQ na página, atualize o JSON-LD junto.
- `robots.txt` libera buscadores e crawlers de IA e aponta para o `sitemap.xml`.
- `llms.txt` resume a DDLP para assistentes de IA. Mantenha alinhado com a página.
- `assets/og.png` (1200×630) é a imagem de compartilhamento.

## Idiomas

O português é o idioma-fonte. Inglês e espanhol ficam no objeto `translations` em `script.js`, ligados pelos atributos `data-i18n`. Ao adicionar um texto novo, crie a chave nos dois dicionários.
