# Portfólio — Davi Alves Rodrigues

Site de portfólio pessoal construído com **Next.js 14**, **TypeScript** e **Tailwind CSS**.

## ✨ Features

- Cursor personalizado com anel lerp
- Partículas interconectadas em canvas (WebGL-like)
- Efeito glitch + shimmer no nome
- Typing animation com frases rotativas
- Orbe 3D animado com anéis giratórios
- Scroll reveal em todas as seções
- Timeline de experiências com descrições detalhadas
- Cards de projetos do GitHub
- Seção de contato com cópia de email
- Noise texture + scanline overlay
- Design hex-grid sutil no hero
- 100% responsivo

## 🗂 Estrutura

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fontes, metadata
│   ├── page.tsx          # Composição das seções
│   └── globals.css       # CSS global, custom props, keyframes
├── components/
│   ├── Background.tsx    # Canvas de partículas
│   ├── Cursor.tsx        # Cursor personalizado
│   ├── Nav.tsx           # Navegação fixa
│   ├── Hero.tsx          # Seção hero com orbe e typing
│   ├── About.tsx         # Sobre mim + barras de proficiência
│   ├── Skills.tsx        # Tech stack em cards
│   ├── Experience.tsx    # Timeline de experiências
│   ├── Projects.tsx      # Projetos do GitHub
│   ├── Education.tsx     # Formação e conquistas
│   ├── Contact.tsx       # Contato + links sociais
│   └── Footer.tsx        # Rodapé
├── lib/
│   └── data.ts           # ⭐ Fonte central de todos os dados
├── public/               # Assets estáticos
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
# → http://localhost:3000

# Build de produção
npm run build
npm start
```

## 🛠 Para personalizar

Edite apenas o arquivo **`lib/data.ts`** — lá ficam todos os dados pessoais, experiências, projetos, skills e contatos. Os componentes consomem os dados de lá automaticamente.

## 📦 Deploy

O projeto está pronto para deploy na **Vercel** (recomendado):

1. Suba o repositório no GitHub
2. Importe no [vercel.com](https://vercel.com)
3. Deploy automático em cada push ✅

Ou qualquer outra plataforma com suporte a Next.js.
