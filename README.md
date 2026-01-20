# Desafio de conclusão - tivit-net-github-copilot

# Credit Card Brand Validator

Aplicação web simples que identifica a bandeira de um cartão a partir do número digitado e exibe o ícone correspondente. Feito com HTML, CSS e JavaScript (ES modules).

## Estrutura do projeto

```
credit-card-brand-validator
├── src
│   ├── index.html
│   ├── js
│   │   ├── index.js
│   │   └── validator.js
│   ├── css
│   │   └── styles.css
│   └── icons               # ícones (.png) das bandeiras usados pela página
├── package.json
└── README.md
```

## Como executar (recomendado)

1. Abra um terminal na raiz do projeto:
2. Rode um servidor estático (evite abrir via file:// para que imports funcionem):
   - Com live-server (recomendado se instalado):
     ```sh
     npx live-server src
     ```
   - Ou, se tiver script npm configurado:
     ```sh
     npm install
     npm start
     ```
3. Abra no navegador a URL fornecida pelo servidor (ex.: http://127.0.0.1:8080).

Observação: o script JavaScript usa type="module" em index.html, por isso é necessário servir via HTTP.

## Uso

1. Digite o número do cartão no campo (pode usar espaços ou traços).
2. Clique em "Validar" ou digite — a tabela abaixo mostrará:
   - Número digitado
   - Bandeira: ícone (.png) + nome

## Bandeiras suportadas

- visa
- mastercard
- amex (American Express)
- discover
- jcb
- diners (Diners Club)
- enroute
- voyager
- hipercard
- aura

Coloque os arquivos de ícone em:
`src/icons/visa.png`, `src/icons/mastercard.png`, `src/icons/amex.png`, `src/icons/discover.png`, `src/icons/jcb.png`, `src/icons/diners.png`, `src/icons/enroute.png`, `src/icons/voyager.png`, `src/icons/hipercard.png`, `src/icons/aura.png`

## Números de teste úteis

- Visa: 4111 1111 1111 1111
- MasterCard: 5500 0000 0000 0004
- Amex: 3400 0000 0000 009
- Discover: 6011 0000 0000 0004
- JCB: 3530 1113 3330 0000
- Diners (14 dígitos exemplos): 3056 9309 0259 04 (teste)
- Outros emissores: consulte BINs de teste específicos conforme necessário
- É possível gerar números através do site https://www.4devs.com.br/gerador_de_numero_cartao_credito para testar o validador de cartão.

