# Substituição dos logos das empresas

Coloque aqui os arquivos em alta resolução (SVG de preferência, ou PNG com
pelo menos 400px no lado maior) e eles serão processados para `public/img/`:

- `mirae-asset.svg|png`  — hoje não existe arquivo; o chip mostra o nome em texto
- `pagseguro.svg|png`    — o arquivo atual tem só 66×18px de arte útil
- `foton.svg|png`        — o arquivo atual tem só 65×14px de arte útil

Opcionalmente também: `safra`, `itau`, `caixa` (os atuais têm 80×80, aceitáveis
até 40px de altura em telas 2x, mas o ideal é trocar).

O processamento faz: recorte do espaço morto em volta da arte, otimização e
cópia para `public/img/co-<nome>.png` (ou `.svg`).
