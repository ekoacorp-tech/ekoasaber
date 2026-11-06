# Histórico de versões

Todas as mudanças relevantes do Ekoa Saber. A versão publicada fica em [`version.json`](version.json), e o próprio app avisa quando há atualização.

## [19 beta] · 04/11/2026 · Exclusão com lixeira e sincronização mais segura
- **Exportar na Sincronização passa a ser o envio:** os ciclos ficam "Exportado", e um ciclo editado depois pede "Exportar de novo". O envio de CSV por questionário foi aposentado.
- **Excluir questionário**, com Lixeira, "Desfazer" e restauração. A exclusão viaja entre dispositivos por um registro de exclusão, com regras para conflito entre editar e excluir.
- **Importação à prova de erro:** reconhece PDF, CSV ou planilha escolhidos por engano, verifica a integridade (SHA-256), avisa sobre arquivo repetido ou mais antigo e protege edições não gravadas.
- Removido o botão "Limpar histórico", que apagava tudo sem volta.
- Formato de sincronização 2. O formato 1 continua importável.

## [18 beta] · 04/11/2026 · Ajuste do nome
- A tela de abertura passa a exibir "Ekoa Saber".

## [17 beta] · 04/11/2026 · Novo nome e relatório em PDF
- **Novo nome: Ekoa Saber** (antes *Sankhya Sapiens*), para não usar marcas de terceiros. A logo e os dados permanecem.
- **Relatório em PDF** por setor, colaborador ou geral.
- **Radar de evolução** por módulo entre os dois últimos ciclos.
- **Índice de conhecimento** de 0 a 100 e seção de base de dados com a origem de cada ciclo.

## [16 beta] · 04/11/2026 · Sincronização entre dispositivos
- Exportar e importar ciclos entre dispositivos, nos dois sentidos, com prévia, mesclagem por versão, detecção de conflito e "desfazer última importação".
- Nome do dispositivo e registro das duas últimas exportações e importações.
- **Aviso de nova versão** com as novidades e atualização sem perda de dados.

## [15 beta] · 04/11/2026 · Instalação e edição
- Convite de instalação dentro do app (Android e computador; instruções no iPhone).
- Ao editar um ciclo, a lista mostra só as rotinas já respondidas.

## [14 beta] · 04/11/2026 · Tela inicial e Painel
- Tela inicial com Novo questionário, Editar e Painel.
- **Painel** com quem respondeu, evolução entre ciclos, **auditor das etapas** e plano de ação exportável.

## [13 beta] · 04/11/2026 · Mais espaço de tela
- Menu lateral que se recolhe após a seleção.

## [12 beta] · 03/11/2026 · Identidade própria
- Logo do app alinhada à identidade Ekoa, embutida no código para nunca falhar no carregamento.

## [11 beta] · 03/11/2026 · Revisão de ciclos
- Edição de ciclos gravados com versionamento (v2, v3…). Editar um ciclo já enviado exige reenvio, e a versão reenviada é a final.
- Topo mais limpo e informações da versão em "Sobre".

## [6 a 10 beta] · 03/11/2026 · De formulário a app
- **PWA:** instalável e funcionando offline (Service Worker + manifest).
- Armazenamento em **IndexedDB**, com migração automática dos rascunhos anteriores.
- Caixa de saída com ID único por ciclo e envio sob comando do usuário.
- Identidade visual Ekoa, aplicação automática do módulo escolhido e histórico do que foi preenchido.

## [5] · Formulário HTML original
- Questionário de 194 rotinas por módulo, salvo no navegador e exportado em CSV.
