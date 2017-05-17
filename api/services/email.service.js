'use strict';
var email = require('../../infrastructure/email');
const emailModel = require('../../domain/email/email.model');

exports.senEmail = (args, res, next) => {
  /**
   * Envia relatório por e-mail
   **/
  res.setHeader('Content-Type', 'application/json');
  let email = new emailModel
  let body = args.body.originalValue;
  let destinatario = body.destinatario;
  let mensagem = body.mensagem;

  email.sendEmail(destinatario, mensagem, (results) => {
   res.end(results);
  })
}