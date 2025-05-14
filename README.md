# Visualizador de Token

Aplicação simples em Node.js que exibe o token de acesso presente na URL.

## Como funciona

A aplicação extrai o parâmetro `code` da URL (exemplo: `?code=TG-65b6d5f6baa0a300166db75-20911697`) e o exibe na página.

## Como executar localmente

1. Instale as dependências:
```
npm install
```

2. Inicie o servidor:
```
npm start
```

3. Acesse no navegador:
```
http://localhost:3000/?code=SEU-TOKEN-AQUI
```

## Deployment na Vercel

Para fazer deploy na Vercel:

1. Instale a CLI da Vercel (opcional):
```
npm i -g vercel
```

2. Deploy:
```
vercel
```

Ou simplesmente conecte seu repositório GitHub na plataforma da Vercel. 