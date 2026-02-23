# 🧪 Demonstração Prática - Vitest

Este repositório contém o código prático desenvolvido para a disciplina de **Teste e Qualidade** do curso de Análise e Desenvolvimento de Sistemas do Instituto Federal do Ceará (IFCE) - Campus Jaguaruana. 

O objetivo deste projeto é demonstrar a aplicação, o funcionamento e as vantagens do **Vitest**, um framework moderno de testes para aplicações JavaScript e TypeScript.

## 📌 Sobre o Projeto

O Vitest foi criado para oferecer uma alternativa mais rápida e simples em relação a frameworks tradicionais como o Jest. Para exemplificar seu uso em um caso real, simulamos a validação de um **módulo de cálculos financeiros**, onde a precisão e a validação de regras de negócios são críticas.

### Conceitos Demonstrados:
* **Suporte Nativo a TypeScript:** O código foi totalmente tipado, e o Vitest compila o TS automaticamente na fase de transformação, sem exigir configurações complexas.
* **Execução em Tempo Real (Watch Mode):** Reexecuta automaticamente os testes sempre que há alterações no código, melhorando o feedback contínuo.
* **Alta Performance:** Aproveita recursos do Vite como ES Modules e Hot Module Replacement (HMR) para rodar testes rapidamente.
* **Testes Unitários e de Integração:** Validação de funções isoladas e verificação da comunicação entre partes do sistema.

## 📂 Estrutura de Pastas

O projeto divide a regra de negócio e os arquivos de teste de forma clara:

```text
vitest-napratica/
├── src/
│   ├── types.ts           # Definição de interfaces e tipos
│   ├── validacoes.ts      # Módulo isolado de regras de validação
│   └── financeiro.ts      # Motor de cálculo financeiro
└── tests/
    ├── validacoes.test.ts # Testes unitários das validações
    └── financeiro.test.ts # Testes unitários e de integração
```

## 🚀 Como executar este projeto na sua máquina

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. O projeto utiliza ES Modules nativamente.

**1. Clone o repositório e instale as dependências:**
```bash
git clone https://github.com/GustavoDeltta/vitest-napratica.git
cd vitest-napratica
npm install
```

**2. Execute os testes no terminal (Modo Watch):**
Com o framework iniciado, ele realiza a busca automática por arquivos de teste no projeto.
```bash
npm run test
```

**3. Execute os testes com a Interface Gráfica (Vitest UI):**
Abre um painel interativo no navegador para visualização avançada dos testes em tempo real.
```bash
npm run test:ui
```

**4. Gere o Relatório de Cobertura de Código (Coverage):**
Verifica a porcentagem de linhas, funções e caminhos lógicos que foram validados pelos testes automatizados.
```bash
npm run coverage
```

---
*Projeto desenvolvido por Gustavo Sousa para fins acadêmicos - 2026*