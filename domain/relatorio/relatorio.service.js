'use strict';
var email = require('../../infrastructure/email');
const relatorioModel = require('./relatorio.model');

exports.senEmail = (args, res, next) => {
  /**
   * Envia relatório por e-mail
   **/
  res.setHeader('Content-Type', 'application/json');
  let relatorio = new relatorioModel
  let body = args.body.originalValue;
  let destinatario = body.destinatario;
  let mensagem = body.mensagem;

  relatorio.sendEmail(destinatario, mensagem, (results) => {
   res.end(results);
  })
}