## Ateliê da Paula - Vitrine Reborn

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />
</p>

<p align="center">
  Uma vitrine virtual responsiva e de alta performance desenvolvida para um ateliê de arte Reborn. O projeto foca em conversão, usabilidade e na apresentação imersiva do portfólio.
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-arquitetura-e-decisões-técnicas">Arquitetura</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-como-executar">Como Executar</a>
</p>

---

## Sobre o Projeto

O **Ateliê da Paula** é uma Single Page Application (SPA) construída para conectar o trabalho artesanal da artista com clientes em potencial. A interface foi desenhada para transmitir delicadeza e profissionalismo, utilizando uma paleta de cores acolhedora e tipografia moderna.

A aplicação direciona ativamente o fluxo do usuário para a conversão via WhatsApp, utilizando mensagens pré-formatadas para facilitar o primeiro contato.

## Arquitetura e Decisões Técnicas

Este projeto foi construído com foco em escalabilidade e performance, adotando padrões de mercado:

*   **Tipagem Estrita:** Uso intensivo de `TypeScript` com interfaces definidas (ex: `BebeReborn`) para garantir a integridade dos dados e evitar erros em tempo de execução.
*   **Performance (LCP Otimizado):** Implementação de `loading="lazy"` nas imagens do portfólio para adiar o carregamento de recursos pesados, garantindo um tempo de resposta inicial ultrarrápido.
*   **Estilização Utilitária:** `Tailwind CSS` para um desenvolvimento ágil e responsivo, mantendo o bundle CSS final extremamente leve.
*   **Gerenciamento de Estado Global:** Configuração da store com `Zustand` (`useBabyStore.ts`) para lidar com opções de customização e regras de negócio de forma simples e livre de *prop drilling*.
*   **Componentização:** Divisão semântica da interface em componentes isolados (`Header`, `Hero`, `Galeria`, `Enxoval`, `Cuidados`), facilitando a manutenção e a legibilidade do código.

## Funcionalidades

- [x] Portfólio dinâmico com grid responsivo.
- [x] Navegação por *Smooth Scroll* integrada.
- [x] Integração direta com a API do WhatsApp para orçamentos.
- [x] Interface 100% responsiva (Mobile-first approach).
- [x] Efeitos de microinteração (hover, scale) para melhor feedback visual.
