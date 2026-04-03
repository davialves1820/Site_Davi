# 🌌 Portfolio — Davi Alves Rodrigues

---

## 🎭 Sobre o Projeto

Este é o meu portfólio pessoal, projetado para ser uma experiência imersiva e de alta performance. O site combina estética *cyberpunk/minimalista* com tecnologias modernas de desenvolvimento web para apresentar minha trajetória acadêmica.

---

## ✨ Principais Funcionalidades

- **💎 Estética Premium:** Interface dark mode com overlays de noise, scanlines e grid hexagonal.
- **⚡ Performance Máxima:** Construído com Next.js 14 App Router para carregamento instantâneo.
- **🖱️ Experiência Imersiva:** Cursor personalizado baseado em `lerp` e sistema de partículas interativas em Canvas.
- **🚀 Arquitetura Data-Driven:** Todo o conteúdo é gerenciado por uma única fonte da verdade (`lib/data.ts`).
- **📱 100% Responsivo:** Design adaptável para qualquer tamanho de tela, do mobile ao ultrawide.
- **🛠️ Tech Stack Completa:** Demonstração de proficiência em Frontend, Backend, Banco de Dados, IoT e IA.

---

## 📂 Estrutura do Repositório

```bash
Site_Davi_Alves/
├── app/                  # Rotas e layout (Next.js App Router)
│   ├── globals.css       # Design System (Variáveis, Keyframes, Utilitários)
│   └── page.tsx          # Ponto de entrada e montagem das seções
├── components/           # Componentes modulares e reutilizáveis
│   ├── Background.tsx    # Motor de partículas WebGL/Canvas
│   ├── Hero.tsx          # Seção de impacto com efeito typing
│   ├── Nav.tsx           # Navegação futurista com glassmorphism
│   └── ...               # Outras seções (About, Projects, Experience, etc.)
├── lib/
│   └── data.ts           # 🧠 Central de Informações (Edite aqui para personalizar)
├── public/               # Ativos estáticos (Imagens, Ícones)
└── tailwind.config.ts    # Configurações de tema e animações
```

---

## 🛠️ Como Iniciar

### Pré-requisitos
- Node.js 18.x ou superior
- npm ou yarn

### Instalação e Execução
1. Clone o repositório:
   ```bash
   git clone https://github.com/davialves1820/Site_Davi_Alves.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🎨 Como Personalizar

Para atualizar o conteúdo do site com suas próprias informações, você só precisa editar um arquivo:

👉 **`lib/data.ts`**

Lá você encontrará objetos exportados para:
- `PERSONAL`: Seu nome, bio e links sociais.
- `SKILLS`: Suas competências divididas por categorias.
- `EXPERIENCES`: Sua trajetória profissional com detalhes.
- `PROJECTS`: Seus principais trabalhos (com links do GitHub).
- `EDUCATION`: Sua formação acadêmica.

---

## 📩 Contato

| Canal | Link |
| :--- | :--- |
| **Email** | [davialvesr18@gmail.com](mailto:davialvesr18@gmail.com) |
| **LinkedIn** | [in/davi-rodrigues1820](https://www.linkedin.com/in/davi-rodrigues1820/) |
| **GitHub** | [@davialves1820](https://github.com/davialves1820) |

---

<p align="center">
  Desenvolvido com 💙 por <b>Davi Alves Rodrigues</b>
</p>
