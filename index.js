export default function (kibana) {
    return new kibana.Plugin({
      id: 'helloWorld',
      configPrefix: 'helloWorld',
      publicDir: `${__dirname}/public`,
      require: ['kibana', 'elasticsearch'],
      init(server) {
        // Adicione aqui o código de inicialização do plugin
      }
    });
  }
  