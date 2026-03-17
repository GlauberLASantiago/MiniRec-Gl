# MiniRec Gl 🎙️

O **MiniRec Gl** é um gravador de áudio leve, elegante e funcional que roda inteiramente no navegador. Projetado com uma interface minimalista e moderna, ele permite capturar áudio tanto do sistema quanto do microfone com ferramentas integradas de processamento.

---

## ✨ Funcionalidades

- **Captura Dual**: Alterne facilmente entre áudio do sistema (Loopback) e microfone.
- **Visualização em Tempo Real**: VU Meter vertical com indicador de *clipping* (pico de áudio).
- **Processamento Automático**: 
  - **Auto-Norm**: Normaliza o volume da gravação para o nível ideal antes de salvar.
  - **Auto-Rec**: Inicia a gravação automaticamente ao detectar sinal de áudio acima de -54dB.
- **Exportação MP3**: Converte o áudio gravado diretamente para MP3 (256kbps) usando o cliente, poupando processamento de servidor.
- **Player Integrado**: Ouça suas gravações na hora, com controle de velocidade de reprodução (0.5x a 2.0x).
- **Monitoramento**: Opção para ouvir o retorno do microfone em tempo real.

## 🛠️ Tecnologias Utilizadas

- **Tailwind CSS**: Para uma interface responsiva e estilizada.
- **Web Audio API**: Para manipulação, análise e ganho de áudio em tempo real.
- **LameJS**: Para codificação de áudio em formato MP3 no lado do cliente.
- **MediaRecorder API**: Para captura do fluxo de mídia.

## 🚀 Como usar

1. Clone o repositório ou baixe o arquivo HTML único.
2. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge ou Firefox recomendados).
3. Selecione a fonte desejada (**Sistema** ou **Microfone**).
4. Clique em **GRAVAR**.
   - Se estiver usando o modo "Sistema", selecione a aba ou janela que deseja capturar.
5. Ao finalizar, clique em **PARAR**. O arquivo MP3 será gerado e o download iniciará automaticamente.

## ⚠️ Observações Técnicas

- **Captura de Sistema**: Por questões de segurança dos navegadores, a captura de áudio do sistema geralmente requer o compartilhamento de tela/janela e pode não funcionar em dispositivos móveis.
- **Permissões**: O navegador solicitará permissão para acessar o microfone ou realizar a captura de tela.

---
Desenvolvido com foco em simplicidade e performance.
