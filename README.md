content = """# Ateliê da Paula - Vitrine Digital 🎨👶

O projeto do Ateliê da Paula já está em produção! A vitrine digital foi implantada com sucesso e pode ser acessada em tempo real através do link abaixo:

👉 **[https://atelie-paula.netlify.app/](https://atelie-paula.netlify.app/)**

Este documento detalha a estrutura técnica de funcionamento, as diretrizes de teste e o processo para execução local do projeto.

---

## 🛠️ Tecnologias Utilizadas

A aplicação é uma **Single Page Application (SPA)** de alta performance construída com a stack mais moderna do ecossistema React:

* **React 19**: Versão mais recente para componentes de interface.
* **TypeScript**: Tipagem estática para maior segurança e produtividade.
* **Vite**: Ferramenta de build extremamente rápida.
* **Tailwind CSS v4**: Estilização baseada em utilitários para design responsivo.
* **Zustand**: Preparado para gerenciamento de estado global.
* **VLibras**: Integração de acessibilidade para tradução em Libras.

---

## ⚙️ Como Funciona

* **Interface e Layout**: A estilização é gerenciada inteiramente pelo **Tailwind CSS v4**, que garante uma responsividade fluida baseada em *grids* e *flexbox*, adaptando a interface para qualquer tamanho de tela sem a necessidade de arquivos CSS complexos.
* **Fluxo de Dados**: O site não consome uma API externa no momento. Os dados dos produtos (fotos e descrições dos Bebês Reborn) estão mapeados localmente dentro de um array no próprio componente `App.tsx`, que utiliza a função `.map()` para renderizar a galeria dinamicamente.
* **Conversão (CTA)**: O objetivo central da arquitetura é guiar o usuário para a conversão via WhatsApp. Os botões utilizam a API de redirecionamento do WhatsApp (`wa.me`) injetando mensagens de texto pré-formatadas para facilitar o contato direto com a artista.
* **Acessibilidade**: O projeto conta com a injeção do script do **VLibras** no `index.html`, garantindo suporte imediato para usuários com deficiência auditiva.

---

## 🧪 Como Testar

Para validar a integridade da aplicação diretamente no ambiente de produção (Netlify), execute a seguinte bateria de testes funcionais:

1.  **Navegação Âncora**: Clique nos links do cabeçalho fixo (Início, Galeria, Sobre, Cuidados) e verifique se o *smooth scroll* direciona com precisão matemática para as seções correspondentes na mesma página.
2.  **Validação de Responsividade (Mobile-First)**: Acesse o link pelo smartphone ou utilize o *DevTools* do navegador (F12) para simular telas menores. Confirme se a grade de fotos da galeria se reorganiza corretamente de colunas múltiplas para coluna única, mantendo o layout coeso.
3.  **Teste de Integração CTA**: Clique em pelo menos um botão "Fale no WhatsApp". O comportamento esperado é a abertura de uma nova aba direcionando para o aplicativo ou WhatsApp Web, com a mensagem padrão ("Olá, gostaria de saber mais sobre os bebês reborn!") já preenchida.
4.  **Teste de Hover**: Na galeria, passe o mouse sobre as imagens e certifique-se de que a sobreposição escura com o nome do bebê e os detalhes aparece suavemente sem quebrar o alinhamento.

---

## 🚀 Como Baixar (Execução Local)

Para baixar e rodar o código-fonte em sua máquina local para futuras manutenções ou implementações:

### Pré-requisitos
* Possuir o **Node.js** (versão 18 ou superior) instalado.

### Passo a Passo

1.  **Obtenha o código**: Baixe a pasta do projeto (`bebe-reborn-site - vizu`) ou clone o repositório.
2.  **Acesse o diretório**: Abra o terminal na raiz da pasta do projeto.
3.  **Instalação**: Execute a instalação das dependências:
    ```bash
    npm install
    ```
4.  **Execução**: Inicie o servidor local de desenvolvimento:
    ```bash
    npm run dev
    ```
5.  **Acesso**: Abra o navegador e acesse a porta informada (geralmente `http://localhost:5173/`).

---

### 📌 Dicas Extras de Manutenção
* **Limpeza de Código**: Antes de novos deploys, recomenda-se remover o arquivo `src/store/useBabyStore.ts` caso a funcionalidade de customização não seja implementada, reduzindo o tamanho do bundle final.
* **Otimização de Imagens**: Para manter a performance no Netlify, utilize imagens no formato `.webp` sempre que possível.
"""

with open("README.md", "w", encoding="utf-8") as f:
    f.write(content)
